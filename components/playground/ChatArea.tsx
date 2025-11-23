"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type React from "react";
import { useEffect, useRef } from "react";
import { MaximizeIcon, SendIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { postChatMessage } from "@/lib/api";
import type { CoachingItem, Message } from "@/lib/types";
import ChatBubble from "./ChatBubble";

export const useMaximizedState = () => {
	const queryClient = useQueryClient();
	const queryKey = ["chatMaximized"];

	// Initialize the maximized state
	const { data: isMaximized } = useQuery({
		queryKey,
		queryFn: async () => false,
		initialData: false,
	});

	// Mutation to toggle the maximized state
	const { mutate: toggleMaximized } = useMutation({
		mutationFn: async () => !isMaximized,
		onSuccess: (newState) => {
			queryClient.setQueryData(queryKey, newState);
		},
	});

	return { isMaximized, toggleMaximized };
};

const ChatArea = () => {
	const queryClient = useQueryClient();
	const inputRef = useRef<HTMLTextAreaElement | null>(null);
	const messageEndRef = useRef<HTMLDivElement | null>(null);
	const { isMaximized, toggleMaximized } = useMaximizedState(); // Use the custom hook

	// query selectedCoachingItem and try to extract default prompt from it
	const { data: coachingItem } = useQuery<CoachingItem | null>({
		queryKey: ["selectedCoachingItem"],
		queryFn: async () => {
			// TODO: Replace with actual fetch logic for selectedCoachingItem
			return null;
		},
		initialData: null,
	});

	const initialPrompt =
		coachingItem?.initialPrompt || "tell me the tricks that Shaun white did";

	const { data, isLoading, isFetching, error } = useQuery<Message[]>({
		queryKey: ["chatMessage"],
		queryFn: async () => await postChatMessage(initialPrompt, true),
		refetchOnWindowFocus: false,
		initialData: [
			{
				role: "user",
				content: initialPrompt,
			},
		],
	});

	// Mutation to handle sending user messages
	const { mutate, isPending } = useMutation({
		mutationFn: async (message: string) => {
			queryClient.setQueryData<Message[]>(
				["chatMessage"],
				(prevMessages = []) => [
					...prevMessages,
					{ role: "user", content: message },
				],
			);

			const response = await postChatMessage(message);
			return response;
		},
		onSuccess: (data) => {
			if (data) {
				queryClient.setQueryData<Message[]>(
					["chatMessage"],
					(prevMessages = []) => [...prevMessages, ...data],
				);
			}
		},
	});

	const onSendMessage = (event: React.FormEvent) => {
		event.preventDefault();

		const input: string = inputRef.current?.value.trim() || "";
		if (!input) return;

		if (inputRef.current) inputRef.current.value = "";
		mutate(input);
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();
			onSendMessage(event);
		}
	};

	useEffect(() => {
		if (messageEndRef.current) {
			messageEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<div
			className={`bg-background border-r p-6 ${
				isMaximized ? "fixed inset-0 z-50 w-full h-full mt-20" : "w-6/12"
			} flex flex-col gap-4`}
		>
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-bold">Chat with AI</h2>
				<Button variant="ghost" size="icon" onClick={() => toggleMaximized()}>
					<MaximizeIcon className="w-5 h-5" />
				</Button>
			</div>
			{data && (
				<>
					<div className="flex-1 overflow-auto">
						<div className="grid gap-4">
							{data?.map((message: Message, index: number) => (
								<ChatBubble key={index} message={message} />
							))}
							{(isFetching || isPending) && (
								<ChatBubble
									message={{ role: "ai", content: "Loading..." }}
									key="loading"
								/>
							)}
							{error && (
								<ChatBubble
									message={{ role: "ai", content: "System Error..." }}
									key="error"
								/>
							)}
							<div ref={messageEndRef} />
						</div>
					</div>
					<div className="relative">
						<form onSubmit={onSendMessage}>
							<Textarea
								placeholder="Type your message..."
								className="w-full rounded-lg border border-neutral-400 p-3 pr-16 resize-none"
								rows={1}
								ref={inputRef}
								onKeyDown={handleKeyPress}
								disabled={isPending || isLoading}
							/>
							<Button
								type="submit"
								variant="ghost"
								size="icon"
								className="absolute top-1/2 -translate-y-1/2 right-3"
								disabled={isPending || isLoading}
							>
								<SendIcon className="w-5 h-5" />
							</Button>
						</form>
					</div>
				</>
			)}
		</div>
	);
};

export default ChatArea;

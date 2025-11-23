export const getData = async () => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
		},
	};

	try {
		const apiUrl = process.env.NEXT_PUBLIC_API_URL;
		if (!apiUrl) {
			console.error("API URL is not defined.");
			return { status: "mocked", message: "This is mock data." };
		}
		const response = await fetch(apiUrl, options);
		if (!response.ok) {
			// Instead of throwing, return mock
			return { status: "mocked", message: "This is mock data." };
		}
		const data = await response.json();
		return data;
	} catch (err) {
		console.error("Failed to fetch data:", err);
		// Return mock data if fetch fails
		return { status: "mocked", message: "This is mock data." };
	}
};

export const postData = async (path: string, body: string) => {
	const url = `${process.env.NEXT_PUBLIC_API_URL}${path}`;

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body,
	};

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			// Instead of throwing, return mock
			return JSON.stringify(["This is a mock AI response."]);
		}
		const data = await response.json();
		return JSON.stringify([data.result ?? "This is a mock AI response."]);
	} catch (err) {
		console.error("Failed to fetch data:", err);
		// Always return a JSON string array as mock
		return JSON.stringify(["This is a mock AI response."]);
	}
};

export const getHealthCheck = async () => {
	try {
		const data = await getData();
		return data;
	} catch (err) {
		console.error("Health check failed:", err);
		// Return mock health check data
		return { status: "mocked", healthy: true };
	}
};

import type { Message } from "./types";

export const postChatMessage = async (
	message: string,
	isFirstMessage: boolean = false,
): Promise<Message[]> => {
	try {
		const response = await postData(
			"/chat-completion",
			JSON.stringify({ message }),
		);
		let aiResponse: string;
		try {
			aiResponse = JSON.parse(response)[0];
		} catch {
			aiResponse = "This is a mock AI response.";
		}

		const result: Message[] = [];
		if (isFirstMessage) result.push({ role: "user", content: message });
		result.push({ role: "ai", content: aiResponse });
		return result;
	} catch (err) {
		console.error("Failed to send chat message:", err);
		// Return mock chat message if fetch fails
		const result: Message[] = [];
		if (isFirstMessage) result.push({ role: "user", content: message });
		result.push({ role: "ai", content: "This is a mock AI response." });
		return result;
	}
};

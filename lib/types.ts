export type Message = {
	role: "user" | "ai" | "system";
	content: string;
};

export type MaybeMessage = Message | null;

export type CoachingItem = {
	title?: string;
	description?: string;
	initialPrompt?: string;
	alt?: string;
};

export type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

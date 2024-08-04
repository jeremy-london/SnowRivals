import ReactMarkdown from "react-markdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ChatBubble = ({ message }: any) => (
  <div
    className={`flex items-start gap-4 ${
      message.role === "user" ? "justify-end" : ""
    }`}
  >
    {message.role === "ai" && (
      <Avatar className="w-8 h-8">
        <AvatarImage src="/placeholder-user.jpg" alt="AI Avatar" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
    )}
    <div
      className={`rounded-lg p-4 max-w-[80%] ${
        message.role === "user"
          ? "bg-primary text-primary-foreground"
          : "bg-muted"
      }`}
    >
      <ReactMarkdown>{message.content}</ReactMarkdown>
    </div>
    {message.role === "user" && (
      <Avatar className="w-8 h-8">
        <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    )}
  </div>
);

export default ChatBubble;

import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

const GoalsItem = ({ Icon, title, description, initialPrompt }: any) => {
  const queryClient = useQueryClient();

  const handleClick = () => {
    queryClient.setQueryData(["selectedCoachingItem"], {
      title,
      description,
      initialPrompt,
    });
  };
  return (
    <Link
      href="/coach"
      className="rounded-lg border bg-background p-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-4">
        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </Link>
  );
};

export default GoalsItem;

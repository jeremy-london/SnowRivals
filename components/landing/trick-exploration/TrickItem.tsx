import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";

const TrickItem = ({ src, alt, title, initialPrompt }: any) => {
  const queryClient = useQueryClient();

  const handleClick = () => {
    queryClient.setQueryData(["selectedCoachingItem"], {
      title,
      alt,
      initialPrompt,
    });
  };
  return (
    <Link
      href="/coach"
      className="group relative overflow-hidden rounded-lg cursor-pointer trick-cards"
      onClick={handleClick}
    >
      <Image
        src={src}
        width="300"
        height="200"
        alt={alt}
        className="aspect-video w-full object-cover transition-all group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
    </Link>
  );
};

export default TrickItem;

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PackageX } from "lucide-react";

const tricks = [
  {
    name: "Frontside 180",
    difficulty: 3,
    description:
      "A classic trick that's great for building confidence and style on the mountain.",
    imageUrl: "/tricks/frontside-180.jpg",
    videoUrl: "https://www.youtube.com/watch?v=GnYAlEt-s00",
  },
  {
    name: "Backside 360",
    difficulty: 5,
    description:
      "A classic spin that looks great and will impress your friends.",
    imageUrl: "/tricks/backside-360.jpg",
    videoUrl: "https://www.youtube.com/watch?v=hUQ3eKS13co",
  },
  {
    name: "Stalefish Grab",
    difficulty: 7,
    description: "A stylish grab that will add some flair to your tricks.",
    imageUrl: "/tricks/stalefish-grab.webp",
    videoUrl: "https://www.youtube.com/watch?v=f9FjhCt_w2U",
  },
];

const TrickSuggestions = () => {
  return (
    <div className="flex items-start flex-col gap-4">
      {tricks.map(({ imageUrl, videoUrl, description, difficulty, name }) => (
        <div key={name} className="flex flex-row items-center gap-4">
          <div
            key={name}
            className="relative min-w-32 w-32 overflow-hidden rounded-lg"
          >
            <Image
              src={imageUrl}
              alt={name}
              width={128}
              height={128}
              className="aspect-square w-full object-cover transition-all group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-muted-foreground">Difficulty: {difficulty}</p>
            <p>{description}</p>
            <Link href={videoUrl} className="mt-2" target="_blank">
              <Button variant="outline" size="sm">
                Watch Tutorial
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrickSuggestions;

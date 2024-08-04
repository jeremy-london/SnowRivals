import GoalsItem from "./GoalsItem";
import {
  TargetIcon,
  PodcastIcon,
  SnowflakeIcon,
  MountainIcon,
  MountainSnowIcon,
  AwardIcon,
} from "@/components/icons"; // Adjust the import based on your actual icon library

const goalsItems = [
  {
    Icon: TargetIcon,
    title: "Set Goals",
    description: "Define your snowboarding goals and track your progress.",
    initialPrompt: "How can I set and track my snowboarding goals effectively?",
  },
  {
    Icon: PodcastIcon,
    title: "Compete",
    description:
      "Prepare for and compete in local and national snowboarding competitions.",
    initialPrompt:
      "What steps should I take to prepare for local and national snowboarding competitions?",
  },
  {
    Icon: SnowflakeIcon,
    title: "Master Tricks",
    description:
      "Work with our coaches to perfect your snowboarding tricks and techniques.",
    initialPrompt:
      "How can I master snowboarding tricks and techniques with the help of a coach?",
  },
  {
    Icon: MountainIcon,
    title: "Explore Terrain",
    description: "Discover new terrain and challenge yourself on the slopes.",
    initialPrompt:
      "What are some tips for discovering new terrain and challenging myself on the slopes?",
  },
  {
    Icon: MountainSnowIcon,
    title: "Improve Technique",
    description: "Work on your overall snowboarding technique and style.",
    initialPrompt:
      "How can I improve my overall snowboarding technique and style?",
  },
  {
    Icon: AwardIcon,
    title: "Achieve Recognition",
    description: "Gain recognition for your snowboarding achievements.",
    initialPrompt:
      "What are some ways to gain recognition for my snowboarding achievements?",
  },
];

const GoalsCards = () => {
  return (
    <div className="container px-4 md:px-6">
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {goalsItems.map((item, index) => (
          <GoalsItem
            key={index}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
            initialPrompt={item.initialPrompt}
          />
        ))}
      </div>
    </div>
  );
};

export default GoalsCards;

import CoachingItem from "./CoachingItem";
import { SignalIcon, DiffIcon, InfoIcon } from "@/components/icons"; // Adjust the import based on your actual icon library

const coachingItems = [
  {
    Icon: SignalIcon,
    title: "Safety",
    description:
      "Learn proper safety techniques and equipment to stay safe on the slopes.",
    initialPrompt:
      "Can you provide some tips on snowboarding safety and the necessary equipment?",
  },
  {
    Icon: DiffIcon,
    title: "Trick Improvement",
    description:
      "Work with our coaches to perfect your tricks and take your snowboarding to the next level.",
    initialPrompt: "What are some tips for improving my snowboarding tricks?",
  },
  {
    Icon: InfoIcon,
    title: "Knowledge",
    description:
      "Gain a deeper understanding of snowboarding techniques, equipment, and the sport's history.",
    initialPrompt:
      "Can you tell me more about snowboarding techniques and the history of the sport?",
  },
];

const CoachingCards = () => {
  return (
    <div className="container px-4 md:px-6">
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {coachingItems.map((item, index) => (
          <CoachingItem
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

export default CoachingCards;

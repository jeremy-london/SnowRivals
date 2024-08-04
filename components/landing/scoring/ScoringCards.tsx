import ScoringItem from "./ScoringItem";
import { SignalIcon, DiffIcon, InfoIcon } from "@/components/icons"; // Adjust the import based on your actual icon library

const scoringItems = [
  {
    Icon: SignalIcon,
    title: "Safety Points",
    description:
      "Earn points by demonstrating proper safety techniques and using the correct equipment on the slopes. Look up the scores for specific safety practices like proper helmet use, checking equipment, or staying within marked trails.",
    initialPrompt: "Look up the score for a 50-50 grind on a rail.",
  },
  {
    Icon: DiffIcon,
    title: "Trick Mastery",
    description:
      "Accumulate points by perfecting your tricks and showcasing your skills. Look up the scores for specific tricks like the Ollie, 360 Spin, or Backflip.",
    initialPrompt: "Look up the score for a Backside 360.",
  },
  {
    Icon: InfoIcon,
    title: "Knowledge Awards",
    description:
      "Gain awards by expanding your understanding of snowboarding techniques, equipment, and the sport's history. Look up the scores for specific knowledge areas like board maintenance, history of snowboarding, or advanced techniques.",
    initialPrompt: "Look up the score for 1440 corked spin.",
  },
];

const ScoringCards = () => {
  return (
    <div className="container px-4 md:px-6">
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {scoringItems.map((item, index) => (
          <ScoringItem
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

export default ScoringCards;

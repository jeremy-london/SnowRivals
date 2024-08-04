import { AirplayIcon, LandPlotIcon, SnowflakeIcon } from "@/components/icons";
import CompetitionItem from "./CompetitionItem";

const competitionItems = [
  {
    Icon: SnowflakeIcon,
    title: "Slopestyle",
    description:
      "Prepare for slopestyle competitions with our unique judging and scoring system.",
    initialPrompt:
      "Can you explain the judging and scoring system for slopestyle competitions?",
  },
  {
    Icon: LandPlotIcon,
    title: "Halfpipe",
    description:
      "Prepare for halfpipe competitions with our unique judging and scoring system.",
    initialPrompt:
      "Can you explain the judging and scoring system for halfpipe competitions?",
  },
  {
    Icon: AirplayIcon,
    title: "Big Air",
    description:
      "Prepare for big air competitions with our unique judging and scoring system.",
    initialPrompt:
      "Can you explain the judging and scoring system for big air competitions?",
  },
];

const CompetitionCards = () => {
  return (
    <div className="container px-4 md:px-6">
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {competitionItems.map((item, index) => (
          <CompetitionItem
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

export default CompetitionCards;

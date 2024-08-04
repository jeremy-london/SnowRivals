import TrickItem from "./TrickItem";

const tricks = [
  {
    src: "/placeholder.svg",
    alt: "Trick 1",
    title: "Backside 360",
    initialPrompt:
      "Can you explain what a Backside 360 is, how to do it, and provide some details about this trick?",
  },
  {
    src: "/placeholder.svg",
    alt: "Trick 2",
    title: "Frontside 180",
    initialPrompt:
      "Can you explain what a Frontside 180 is, how to do it, and provide some details about this trick?",
  },
  {
    src: "/placeholder.svg",
    alt: "Trick 3",
    title: "Ollie",
    initialPrompt:
      "Can you explain what an Ollie is, how to do it, and provide some details about this trick?",
  },
  {
    src: "/placeholder.svg",
    alt: "Trick 4",
    title: "Tail Press",
    initialPrompt:
      "Can you explain what a Tail Press is, how to do it, and provide some details about this trick?",
  },
  {
    src: "/placeholder.svg",
    alt: "Trick 5",
    title: "Nose Slide",
    initialPrompt:
      "Can you explain what a Nose Slide is, how to do it, and provide some details about this trick?",
  },
  {
    src: "/placeholder.svg",
    alt: "Trick 6",
    title: "Boardslide",
    initialPrompt:
      "Can you explain what a Boardslide is, how to do it, and provide some details about this trick?",
  },
];

const TrickCards = () => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {tricks.map((trick, index) => (
        <TrickItem
          key={index}
          src={trick.src}
          alt={trick.alt}
          title={trick.title}
          initialPrompt={trick.initialPrompt}
        />
      ))}
    </div>
  );
};

export default TrickCards;

import TrickItem from "./TrickItem";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const tricks = [
  {
    src: "/tricks/grab-1.avif",
    alt: "Grabs",
    title: "Grabs",
    initialPrompt:
      "Grabs involve holding the board while in the air. Can you explain how to perform an Indy grab, including tips for perfecting it?",
  },
  {
    src: "/tricks/grab-2.avif",
    alt: "Spins",
    title: "Spins",
    initialPrompt:
      "Spins are rotations in the air. Can you describe how to do a Backside 360, including the key techniques to master it?",
  },
  {
    src: "/tricks/flip-1.avif",
    alt: "Flips",
    title: "Flips",
    initialPrompt:
      "Flips are head-over-heels rotations. Can you explain how to do a Backflip, including tips for landing it cleanly?",
  },
  {
    src: "/tricks/jump-1.avif",
    alt: "Jumps",
    title: "Jumps",
    initialPrompt:
      "Jumps involve launching off the ground. Can you describe how to perform an Ollie, including the technique to get the most height?",
  },
  {
    src: "/tricks/slide.avif",
    alt: "Slides",
    title: "Slides",
    initialPrompt:
      "Slides involve sliding the board along a surface. Can you explain how to do a Boardslide, including tips for balancing?",
  },
  {
    src: "/tricks/butter.avif",
    alt: "Buttering",
    title: "Buttering",
    initialPrompt:
      "Buttering involves performing tricks on the snow surface. Can you describe how to do a Nose Butter, including tips for maintaining control?",
  },
  {
    src: "/tricks/butter-2.avif",
    alt: "Combos",
    title: "Combos",
    initialPrompt:
      "Combos involve linking multiple tricks together in a sequence. Can you explain how to combine a 180 Spin with a Tail Grab, including tips for smoothly transitioning between tricks?",
  },
  {
    src: "/tricks/handstand-1.avif",
    alt: "Other",
    title: "Other",
    initialPrompt:
      "This category includes unique tricks. Can you explain how to perform a custom trick of your choice, detailing the key steps and techniques?",
  },
];

const TrickCards = () => {
  return (
    <div className="text-white mx-auto grid grid-cols-1 gap-6 px-6 py-12 grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {tricks.map((trick, index) => (
        <TrickItem
          key={index}
          src={basePath + trick.src}
          alt={trick.alt}
          title={trick.title}
          initialPrompt={trick.initialPrompt}
        />
      ))}
    </div>
  );
};

export default TrickCards;

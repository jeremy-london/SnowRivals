"use client";
import Navbar from "./landing/Navbar";
import TaskWizard from "./landing/TaskWizard";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <div className="flex flex-col items-center w-full md:w-1/2 my-0 mx-auto aspect-[500/300]">
        <Image
          src="/snow-rivals.png"
          alt="SnowRivals Banner"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
        <h1 className="text-4xl font-bold">Base Camp</h1>
      </div>
      <main className="flex-1">
        <TaskWizard />
      </main>
    </div>
  );
};

export default Landing;

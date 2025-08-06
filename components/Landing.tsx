"use client";
import { useQueryClient } from "@tanstack/react-query";
import Navbar from "./landing/Navbar";
import TaskWizard from "./landing/TaskWizard";
import Image from "next/image";
import { useEffect } from "react";

const Landing = () => {
  // use react query to clear chatMessages cache
  const queryClient = useQueryClient();

  // if chatMessages lets clear its
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ["chatMessage"], exact: true });
  }, [queryClient]);

  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <div className="flex flex-col items-center w-full md:w-1/2 my-0 mx-auto aspect-500/300">
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

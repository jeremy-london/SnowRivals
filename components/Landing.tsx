"use client";
import { useQuery } from "@tanstack/react-query";
import Navbar from "./landing/Navbar";
import TaskWizard from "./landing/TaskWizard";
import getHealthCheck from "@/lib/api";

const Landing = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getHealthCheck(),
    queryKey: ["movies"], //Array according to Documentation
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        {/* <div>
          <h1>SnowRivals</h1>
        </div> */}
        <div className="grid grid-cols-4 gap-4 p-10">
          <code>{JSON.stringify(data)}</code>
        </div>
        <TaskWizard />
      </main>
    </div>
  );
};

export default Landing;

"use client";
import Navbar from "./landing/Navbar";
import TaskWizard from "./landing/TaskWizard";
import Image from "next/image";

const Landing = () => {
  // const { data, isLoading, isError } = useQuery({
  //   queryFn: async () => await getHealthCheck(),
  //   queryKey: ["healthcheck"], //Array according to Documentation
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Sorry There was an Error</div>;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <div className="flex w-full md:w-1/2 my-0 mx-auto aspect-[500/300]">
        <Image
          src="/snow-rivals.png"
          alt="SnowRival"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <main className="flex-1">
        <TaskWizard />
      </main>
    </div>
  );
};

export default Landing;

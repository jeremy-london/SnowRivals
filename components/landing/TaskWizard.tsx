import { FC } from "react";

import {
  AirplayIcon,
  AwardIcon,
  DiffIcon,
  InfoIcon,
  LandPlotIcon,
  MountainIcon,
  MountainSnowIcon,
  PodcastIcon,
  SignalIcon,
  SnowflakeIcon,
  TargetIcon,
} from "../icons";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";
import TrickExploration from "./trick-exploration/TrickCards";
import CompetitionCards from "./competition-prep/CompetitionCards";
import CoachingCards from "./coaching/CoachingCards";
import GoalsCards from "./goals/GoalsCards";

const TaskWizard: FC = () => {
  return (
    <Tabs defaultValue="welcome" className="mt-8">
      <TabsList className="sticky top-14 z-10 flex w-full bg-background px-4 lg:px-6">
        <TabsTrigger value="welcome">Trick Exploration</TabsTrigger>
        <TabsTrigger value="competition">Competition Prep</TabsTrigger>
        <TabsTrigger value="coaching">Coaching</TabsTrigger>
        <TabsTrigger value="goals">Goals</TabsTrigger>
      </TabsList>
      <TabsContent value="trick-exploration">
        <TrickExploration />
      </TabsContent>
      <TabsContent value="competition">
        <CompetitionCards />
      </TabsContent>
      <TabsContent value="coaching">
        <CoachingCards />
      </TabsContent>
      <TabsContent value="goals">
        <GoalsCards />
      </TabsContent>
    </Tabs>
  );
};

export default TaskWizard;

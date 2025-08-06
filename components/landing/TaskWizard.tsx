import { FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TrickCards from "./trick-exploration/TrickCards";
import CompetitionCards from "./competition-prep/CompetitionCards";
import ScoringCards from "./scoring/ScoringCards";
import GoalsCards from "./goals/GoalsCards";

const TaskWizard: FC = () => {
  return (
    <Tabs defaultValue="tricks" className="mt-8">
      <TabsList className="sticky top-14 z-10 flex w-full bg-background px-4 lg:px-6">
        <TabsTrigger value="tricks">Trick Exploration</TabsTrigger>
        <TabsTrigger value="competition">Competition Prep</TabsTrigger>
        <TabsTrigger value="scoring">Scoring</TabsTrigger>
        <TabsTrigger value="goals">Goals</TabsTrigger>
      </TabsList>
      <TabsContent value="tricks">
        <TrickCards />
      </TabsContent>
      <TabsContent value="competition">
        <CompetitionCards />
      </TabsContent>
      <TabsContent value="scoring">
        <ScoringCards />
      </TabsContent>
      <TabsContent value="goals">
        <GoalsCards />
      </TabsContent>
    </Tabs>
  );
};

export default TaskWizard;

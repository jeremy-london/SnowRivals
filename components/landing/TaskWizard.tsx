import { FC } from "react";
import Link from "next/link";

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
  SunIcon,
  TargetIcon,
} from "../icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const TaskWizard: FC = () => {
  return (
    <Tabs defaultValue="welcome" className="mt-8">
      <TabsList className="sticky top-14 z-10 flex w-full bg-background px-4 lg:px-6">
        <TabsTrigger value="welcome">Welcome</TabsTrigger>
        <TabsTrigger value="competition">Competition Prep</TabsTrigger>
        <TabsTrigger value="coaching">Coaching</TabsTrigger>
        <TabsTrigger value="goals">Goals</TabsTrigger>
      </TabsList>
      <TabsContent value="welcome">
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              width="300"
              height="200"
              alt="Trick 1"
              className="aspect-video w-full object-cover transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white">Backside 360</h3>
              <Button
                variant="ghost"
                size="sm"
                className="mt-4 text-white hover:bg-white/20"
              >
                Improve Trick
              </Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              width="300"
              height="200"
              alt="Trick 2"
              className="aspect-video w-full object-cover transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white">Frontside 180</h3>
              <Button
                variant="ghost"
                size="sm"
                className="mt-4 text-white hover:bg-white/20"
              >
                Improve Trick
              </Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              width="300"
              height="200"
              alt="Trick 3"
              className="aspect-video w-full object-cover transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white">Ollie</h3>
              <Button
                variant="ghost"
                size="sm"
                className="mt-4 text-white hover:bg-white/20"
              >
                Improve Trick
              </Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              width="300"
              height="200"
              alt="Trick 4"
              className="aspect-video w-full object-cover transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white">Tail Press</h3>
              <Button
                variant="ghost"
                size="sm"
                className="mt-4 text-white hover:bg-white/20"
              >
                Improve Trick
              </Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              width="300"
              height="200"
              alt="Trick 5"
              className="aspect-video w-full object-cover transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white">Nose Slide</h3>
              <Button
                variant="ghost"
                size="sm"
                className="mt-4 text-white hover:bg-white/20"
              >
                Improve Trick
              </Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              width="300"
              height="200"
              alt="Trick 6"
              className="aspect-video w-full object-cover transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white">Boardslide</h3>
              <Button
                variant="ghost"
                size="sm"
                className="mt-4 text-white hover:bg-white/20"
              >
                Improve Trick
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="competition">
        <div className="container px-4 md:px-6">
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <SnowflakeIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Slopestyle</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Prepare for slopestyle competitions with our unique judging and
                scoring system.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <LandPlotIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Halfpipe</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Prepare for halfpipe competitions with our unique judging and
                scoring system.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <AirplayIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Big Air</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Prepare for big air competitions with our unique judging and
                scoring system.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="coaching">
        <div className="container px-4 md:px-6">
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <SignalIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Safety</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Learn proper safety techniques and equipment to stay safe on the
                slopes.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <DiffIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Trick Improvement</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Work with our coaches to perfect your tricks and take your
                snowboarding to the next level.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <InfoIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Knowledge</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Gain a deeper understanding of snowboarding techniques,
                equipment, and the sport's history.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="goals">
        <div className="container px-4 md:px-6">
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <TargetIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Set Goals</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Define your snowboarding goals and track your progress.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <PodcastIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Compete</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Prepare for and compete in local and national snowboarding
                competitions.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <SnowflakeIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Master Tricks</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Work with our coaches to perfect your snowboarding tricks and
                techniques.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <MountainIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Explore Terrain</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Discover new terrain and challenge yourself on the slopes.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <MountainSnowIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Improve Technique</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Work on your overall snowboarding technique and style.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <AwardIcon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TaskWizard;

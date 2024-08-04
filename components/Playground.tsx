import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@/components/icons";
import Sidebar from "@/components/playground/Sidebar";
import ChatArea from "@/components/playground/ChatArea";
import Title from "./playground/sidebar/Title";
import ReturnHome from "./playground/sidebar/ReturnHome";
import TrickSuggestions from "./playground/TrickSuggestions";

import React from "react";
import ReactPlayer from "react-player/youtube";
import VideoPlayer from "./playground/VideoPlayer";

const Playground = () => {
  // const { isMaximized } = useMaximizedState(); // Add this line to initialize the maximized state
  return (
    <div className="flex flex-col h-screen w-full">
      <header className="flex items-center justify-between px-6 py-2 border-b">
        <ReturnHome />
        <Title />
      </header>
      <div className="flex h-[calc(100%-5rem)]">
        <div className="flex-1 flex flex-col h-full">
          <div className="flex-1 flex h-full">
            <ChatArea />
            <div className="flex-1 p-6 overflow-auto">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Trick Suggestion</CardTitle>
                    <CardDescription>
                      Based on your skill level and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TrickSuggestions />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Trick Analysis</CardTitle>
                    <CardDescription>
                      Video analysis of these trick attempts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                      <VideoPlayer />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-bold">Frontside 180</h3>
                      <p>
                        Nice work on that Frontside 180! Here are a few tips to
                        help you land it more consistently:
                      </p>
                      <ul className="list-disc pl-6 text-muted-foreground">
                        <li>
                          Make sure to keep your shoulders square and your head
                          up throughout the rotation
                        </li>
                        <li>
                          Bend your knees and use your legs to generate the
                          power, not just your upper body
                        </li>
                        <li>
                          Commit fully to the rotation and don't be afraid to go
                          for it
                        </li>
                      </ul>
                      <Button variant="outline" size="sm" className="mt-4">
                        Try Again
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;

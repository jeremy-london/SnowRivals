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

const Playground = () => {
  // const { isMaximized } = useMaximizedState(); // Add this line to initialize the maximized state
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
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
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 overflow-hidden rounded-lg">
                        <Image
                          src="/placeholder.svg"
                          alt="Frontside 180"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Frontside 180</h3>
                        <p className="text-muted-foreground">Difficulty: 3</p>
                        <p>
                          A classic trick that's great for building confidence
                          and style on the mountain.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Watch Tutorial
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 overflow-hidden rounded-lg">
                        <Image
                          src="/placeholder.svg"
                          alt="Backside 360"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Backside 360</h3>
                        <p className="text-muted-foreground">Difficulty: 5</p>
                        <p>
                          A classic spin that looks great and will impress your
                          friends.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Watch Tutorial
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 overflow-hidden rounded-lg">
                        <Image
                          src="/placeholder.svg"
                          alt="Stalefish Grab"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Stalefish Grab</h3>
                        <p className="text-muted-foreground">Difficulty: 7</p>
                        <p>
                          A stylish grab that will add some flair to your
                          tricks.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Watch Tutorial
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Trick Analysis</CardTitle>
                  <CardDescription>
                    Video analysis of your latest trick attempt
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                    <video className="w-full h-full object-cover">
                      <source src="/trick-video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white"
                      >
                        <PlayIcon className="w-8 h-8" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold">Frontside 180</h3>
                    <p>
                      Nice work on that Frontside 180! Here are a few tips to
                      help you land it more consistently:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>
                        Make sure to keep your shoulders square and your head up
                        throughout the rotation
                      </li>
                      <li>
                        Bend your knees and use your legs to generate the power,
                        not just your upper body
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
  );
};

export default Playground;

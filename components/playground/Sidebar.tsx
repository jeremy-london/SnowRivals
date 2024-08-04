import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MountainIcon, PlayIcon, SettingsIcon } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import ReturnHome from "./sidebar/ReturnHome";
import Title from "./sidebar/Title";

const Sidebar = () => {
  return (
    <div className="hidden md:flex bg-background border-r flex-col gap-4 p-6 w-[300px]">
      <ReturnHome />
      <Title />
      <Tabs
        defaultValue="tricks"
        orientation="vertical"
        className="hidden md:block"
      >
        <TabsList className="flex flex-col h-auto">
          <TabsTrigger value="tricks">Tricks</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="difficulty">Difficulty</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="tricks">
          <div className="grid gap-4">
            <Card>
              <CardHeader className="w-full">
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trick Difficulty</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="performance">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Trick Library</CardTitle>
                <CardDescription>
                  Browse and filter snowboard tricks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Trick</TableHead>
                      <TableHead>Difficulty</TableHead>
                      <TableHead>Rotation</TableHead>
                      <TableHead>Grab</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Ollie</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>None</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Frontside 180</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>180</TableCell>
                      <TableCell>Indy</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Backside 360</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>360</TableCell>
                      <TableCell>Mute</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Frontside Rodeo</TableCell>
                      <TableCell>7</TableCell>
                      <TableCell>540</TableCell>
                      <TableCell>Stalefish</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="difficulty">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Trick Library</CardTitle>
                <CardDescription>
                  Browse and filter snowboard tricks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Trick</TableHead>
                      <TableHead>Difficulty</TableHead>
                      <TableHead>Rotation</TableHead>
                      <TableHead>Grab</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Ollie</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>None</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Frontside 180</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>180</TableCell>
                      <TableCell>Indy</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Backside 360</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>360</TableCell>
                      <TableCell>Mute</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Frontside Rodeo</TableCell>
                      <TableCell>7</TableCell>
                      <TableCell>540</TableCell>
                      <TableCell>Stalefish</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="videos">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Trick Tutorials</CardTitle>
                <CardDescription>
                  Watch and learn snowboard tricks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                    <video className="w-full h-full object-cover">
                      <source src="/video1.mp4" type="video/mp4" />
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
                  <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                    <video className="w-full h-full object-cover">
                      <source src="/video2.mp4" type="video/mp4" />
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
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Sidebar;

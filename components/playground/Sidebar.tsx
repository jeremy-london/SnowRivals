import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlayIcon, SettingsIcon } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Sidebar = () => {
  return (
    <div className="bg-background border-r flex flex-col gap-4 p-6 w-[300px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Snowboard Trick Advisor</h2>
        <Button variant="ghost" size="icon">
          <SettingsIcon className="w-5 h-5" />
        </Button>
      </div>
      <Tabs defaultValue="stats">
        <TabsList>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="tricks">Tricks</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="stats">
          <div className="grid gap-4">
            <Card>
              <CardHeader className="w-full">
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <LinechartChart className="aspect-[16/9]" /> */}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trick Difficulty</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <BarchartChart className="aspect-[16/9]" /> */}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="tricks">
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

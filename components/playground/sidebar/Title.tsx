import { SettingsIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

const Title = () => (
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold">The Coach's Den</h2>
    <Button variant="ghost" size="icon">
      <SettingsIcon className="w-5 h-5" />
    </Button>
  </div>
);

export default Title;

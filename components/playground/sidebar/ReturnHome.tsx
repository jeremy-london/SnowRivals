import { MountainIcon } from "@/components/icons";
import Link from "next/link";

const ReturnHome = () => (
  <Link
    href="/"
    className="flex flex-row gap-2 bg-muted p-5 items-center hover:border hover:border-ring rounded-lg"
  >
    <MountainIcon className="w-5 h-5" />
    <span>Back to Base Camp</span>
  </Link>
);

export default ReturnHome;

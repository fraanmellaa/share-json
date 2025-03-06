import BackdropCard from "@/app/components/BackdropCard";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function DocsHero() {
  return (
    <BackdropCard className="p-6 md:p-12 space-y-3">
      <h1 className="font-bold text-4xl">Json Viewer</h1>
      <p>Display a JSON in a beautiful way with custom styles.</p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <Link
          href="https://github.com/fraanmellaa/json-viewer"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit px-3 py-2 text-sm flex items-center justify-center space-x-2 bg-[#33333360]  hover:bg-[#333] rounded-md transition-all duration-300"
        >
          <span>View on GitHub</span>
          <GitHubLogoIcon className="w-4 h-4" />
          <ArrowTopRightIcon className="w-3 h-3" />
        </Link>
        <Link
          href="/app"
          className="w-fit px-3 py-2 text-sm flex items-center justify-center space-x-2 bg-transparent border border-[#333] hover:bg-[#33333340]  rounded-md transition-all duration-300"
        >
          <span>Try APP</span>
        </Link>
      </div>
    </BackdropCard>
  );
}

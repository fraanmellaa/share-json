import TwitterLogo from "@/app/components/icons/X";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Braces, Package } from "lucide-react";
import Link from "next/link";
import ResponsiveSidebar from "./sidebar/ResponsiveSidebar";

export default function DocsNabvar() {
  return (
    <div className="w-full h-fit sticky top-0 bg-[#171717/10] backdrop-blur-[2px] z-20">
      <div className="max-w-[1220px] mx-auto flex py-10 px-5 bg-transparent items-center justify-between">
        <div className="flex items-center space-x-1.5">
          <ResponsiveSidebar />
          <Link href="/" className="flex items-center space-x-1.5 group">
            <Braces size={36} className="group-hover:animate-pulse" />
            <span className={`font-bold hidden lg:block`}>Share JSON</span>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            href="https://github.com/fraanmellaa/json-viewer"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 hover:animate-pulse"
          >
            <GitHubLogoIcon width={24} height={24} />
          </Link>
          <Link
            href="https://x.com/fraanmellaa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 hover:animate-pulse"
          >
            <TwitterLogo />
          </Link>
          <Link
            href="https://www.npmjs.com/package/@franmella/json-viewer"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 hover:animate-pulse"
          >
            <Package width={24} height={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}

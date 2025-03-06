import { buttonVariants } from "@/app/components/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, MenuIcon } from "lucide-react";
import SidebarSection from "../SidebarSection";
import Link from "next/link";

const ResponsiveSidebar = () => {
  const introduction = [{ text: "Getting Started", href: "/docs" }];
  const frameworkGuides = [
    { text: "Astro", href: "/docs/framework-guides/astro" },
    { text: "NextJS", href: "/docs/framework-guides/nextjs" },
  ];
  const component = [
    { text: "Customization", href: "/docs/component/customization" },
  ];

  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          variant: "ghost",
          className: "mr-2 block w-6 lg:hidden",
        })}
      >
        <MenuIcon size={20} />
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#0F0F0F]">
        <SheetHeader>
          <SheetTitle>@franmella/json-viewer</SheetTitle>
        </SheetHeader>
        <aside className="h-full w-full flex flex-col justify-between items-start ">
          <div className="h-full w-full space-y-10 pl-5">
            <SidebarSection title="Introduction" items={introduction} />
            <SidebarSection title="Framework Guides" items={frameworkGuides} />
            <SidebarSection title="Component" items={component} />
          </div>
          <Link
            href="https://franmella.dev/en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center ml-5 mb-4 space-x-1.5 text-white/60 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <Heart size={16} />
            <span className=" text-sm flex items-center justify-center space-x-1 ml-2 ">
              Build by Fran Mella
            </span>
          </Link>
        </aside>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveSidebar;

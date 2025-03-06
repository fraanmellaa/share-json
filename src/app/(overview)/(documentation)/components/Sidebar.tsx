import { Heart } from "lucide-react";
import Link from "next/link";
import SidebarSection from "./SidebarSection";

export default function DocsSidebar() {
  const introduction = [{ text: "Getting Started", href: "/docs" }];
  const frameworkGuides = [
    { text: "Astro", href: "/docs/framework-guides/astro" },
    { text: "NextJS", href: "/docs/framework-guides/nextjs" },
  ];
  const component = [
    { text: "Customization", href: "/docs/component/customization" },
  ];

  return (
    <aside className="h-[calc(100vh-116px)] max-w-[200px] min-w-[200px] w-full hidden lg:flex flex-col items-start justify-between pb-10 sticky top-[116px]">
      <div className="h-full w-full space-y-10 ">
        <SidebarSection title="Introduction" items={introduction} />
        <SidebarSection title="Framework Guides" items={frameworkGuides} />
        <SidebarSection title="Component" items={component} />
      </div>
      <Link
        href="https://franmella.dev/en"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-1.5 text-white/60 hover:text-white transition-all duration-300 cursor-pointer"
      >
        <Heart size={16} />
        <span className=" text-sm flex items-center justify-center space-x-1 ml-2 ">
          Build by Fran Mella
        </span>
      </Link>
    </aside>
  );
}

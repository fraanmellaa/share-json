"use client";

import SidebarSection from "./SidebarSection";
import { usePathname } from "next/navigation";

export default function DocsInPageSidebar() {
  const pathname = usePathname();

  const gettingStarted = {
    href: "/docs",
    items: [
      {
        text: "Framework Guides",
        href: "/docs#framework-guides",
      },
      {
        text: "Getting Started",
        href: "/docs#getting-started",
      },
    ],
  };

  const nextJSFramework = {
    href: "/docs/framework-guides/nextjs",
    items: [
      {
        text: "Create a new Next.js project",
        href: "/docs/framework-guides/nextjs#create-a-new-nextjs-project",
      },
      {
        text: "Add the library",
        href: "/docs/framework-guides/nextjs#add-the-library",
      },
    ],
  };

  const astroFramework = {
    href: "/docs/framework-guides/astro",
    items: [
      {
        text: "Create a new Astro project",
        href: "/docs/framework-guides/astro#create-a-new-astro-project",
      },
      {
        text: "Add the library",
        href: "/docs/framework-guides/astro#add-the-library",
      },
    ],
  };

  const usage = {
    href: "/docs/component/usage",
    items: [
      {
        text: "Basic Usage",
        href: "/docs/component/usage#basic-usage",
      },
      {
        text: "Props",
        href: "/docs/component/usage#props",
      },
    ],
  };

  const customization = {
    href: "/docs/component/customization",
    items: [
      {
        text: "Container",
        href: "/docs/component/customization#container",
      },
      {
        text: "Fonts",
        href: "/docs/component/customization#font--fonts",
      },
      {
        text: "Colors",
        href: "/docs/component/customization#colors",
      },
      {
        text: "Examples",
        href: "/docs/component/customization#examples",
      },
    ],
  };

  return (
    <aside className="h-[calc(100vh-116px)] max-w-[190px] min-w-[190px] w-full hidden flex-col items-start justify-between pb-10 sticky top-[116px] xl:flex">
      <div className="h-full w-full space-y-10 ">
        {pathname === gettingStarted.href && (
          <SidebarSection title="On this page" items={gettingStarted.items} />
        )}

        {pathname === nextJSFramework.href && (
          <SidebarSection title="On this page" items={nextJSFramework.items} />
        )}

        {pathname === astroFramework.href && (
          <SidebarSection title="On this page" items={astroFramework.items} />
        )}

        {pathname === usage.href && (
          <SidebarSection title="On this page" items={usage.items} />
        )}

        {pathname === customization.href && (
          <SidebarSection title="On this page" items={customization.items} />
        )}
      </div>
    </aside>
  );
}

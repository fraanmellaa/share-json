import { buttonVariants } from "@/app/components/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MenuIcon } from "lucide-react";
import SidebarSection from "../SidebarSection";

const ResponsiveTocMenu = ({
  content,
}: {
  content: {
    href: string;
    items: Array<{ text: string; href: string }>;
  };
}) => {
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          variant: "outline",
          className: "mb-4 mr-2 block w-full xl:hidden",
        })}
      >
        <MenuIcon size={20} />
        <span>On this page</span>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>On this page</SheetTitle>
        </SheetHeader>
        <div className="h-full w-full space-y-10 pl-4">
          <SidebarSection items={content?.items} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveTocMenu;

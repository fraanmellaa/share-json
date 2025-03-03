"use client";

import { usePathname } from "next/navigation";
import { useJsonStore } from "../store/jsonStore";
import { useEffect } from "react";

export default function OverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const resetStore = useJsonStore((state) => state.reset);

  useEffect(() => {
    console.log("resetting store");
    resetStore();
  }, [pathname, resetStore]);

  return <>{children}</>;
}

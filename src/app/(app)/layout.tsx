"use client";

import { usePathname } from "next/navigation";
import { useJsonStore } from "../store/jsonStore";
import { useEffect } from "react";
import Link from "next/link";

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

  return (
    <>
      <span className="absolute bottom-2 left-0 right-0 mx-auto text-white text-sm flex items-center justify-center">
        Made with 💙 by
        <Link
          href="https://franmella.dev/en"
          rel="noopener noreferer"
          target="_blank"
          className="flex items-center justify-center space-x-1 ml-2 hover:text-white/80 transition-all duration-300"
        >
          <span>Fran Mella</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M15 3.5h5.5m0 0V9m0-5.5l-8 8" />
              <path
                strokeLinecap="round"
                d="M11.5 5.5h-4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-4"
              />
            </g>
          </svg>
        </Link>
      </span>{" "}
      {children}
    </>
  );
}

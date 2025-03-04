import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css";
import Link from "next/link";
import { Toaster } from "@pheralb/toast";

export const metadata: Metadata = {
  title: {
    template: "%s | Share JSON data with beautiful designs and customizations",
    default: "JSON Share",
  },
  description:
    "Share JSON data with beautiful designs and customizations. Instantly share JSON data with your team, friends, or the world. Get started for free now, without any sign-up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0F0F0F" />

      <body className={`${roboto.className} antialiased relative dark`}>
        <div className="absolute inset-0 h-full w-full bg-[#0a0a0a] -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#1a1a1a,transparent)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
        {children}

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
        </span>
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css";

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
      <body className={`${roboto.className} antialiased relative`}>
        <div className="absolute inset-0 h-full w-full bg-[#0a0a0a] -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#1a1a1a,transparent)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}

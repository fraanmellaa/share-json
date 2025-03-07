import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css";
import { Toaster } from "@pheralb/toast";
import { Analytics } from "@vercel/analytics/next";

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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#171717" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/manifest.webmanifest" />
        <meta name="og:type" content="website" />
        <meta
          name="og:site_name"
          content="JSON Share | Share JSON data with beautiful designs and customizations"
        />
        <meta name="og:image" content="/favicon/favicon.png" />
        <meta name="og:image:width" content="512" />
        <meta name="og:image:height" content="512" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@franmella" />
        <meta name="twitter:image" content="/favicon/favicon.png" />
        <meta name="twitter:image:width" content="512" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sharejson.franmella.dev" />
      </head>

      <body className={`${roboto.className} antialiased relative dark`}>
        <div className="absolute inset-0 h-full w-full bg-[#171717] -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#171717,transparent)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        {children}

        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}

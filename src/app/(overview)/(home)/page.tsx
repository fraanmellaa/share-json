import GradientHeading from "@/app/components/GradientHeading";
import PreviewComponent from "@/app/components/PreviewComponent";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JSON Share",
};

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden flex flex-col space-y-4 items-center justify-center max-w-[700px] mx-auto px-4 md:px-0 relative">
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

      <GradientHeading>
        Share JSON <span className="block">in a BEAUTIFUL WAY</span>
      </GradientHeading>
      <h2 className="text-white text-center text-sm sm:text-base xl:text-lg font-normal">
        Get started now for free or integrate the React Component in your
        project.
      </h2>

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Link
          href="/app"
          className="bg-blue-500 min-w-[130px] text-center text-white px-4 py-2 rounded-lg font-semibold"
        >
          Start APP
        </Link>
        <Link
          href="/docs"
          className="bg-green-500 min-w-[130px] text-center text-white px-4 py-2 rounded-lg font-semibold"
        >
          Documentation
        </Link>
      </div>

      <div className="w-full h-full max-h-80 xl:max-h-96 overflow-hidden relative p-4 rounded-lg bg-white/10">
        <div className="w-full h-full overflow-y-auto scrollbar">
          <PreviewComponent />
        </div>
      </div>
    </main>
  );
}

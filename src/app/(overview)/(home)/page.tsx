import GradientHeading from "@/app/components/GradientHeading";
import InfoBar from "@/app/components/InfoBar";
import PreviewComponent from "@/app/components/PreviewComponent";
import { Metadata } from "next";
import Link from "next/link";

// import ReactComponentButton from "../components/ReactComponentButton";

export const metadata: Metadata = {
  title: "JSON Share",
};

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden flex flex-col space-y-4 items-center justify-center max-w-[700px] mx-auto relative px-4 md:px-0">
      <div className="absolute top-4">
        <InfoBar
          type="warning"
          text="React Component Documentation will be launched soon. Stay tuned!"
        />
      </div>
      <GradientHeading>
        Share JSON <span className="block">in a BEAUTIFUL WAY</span>
      </GradientHeading>
      <h2 className="text-white text-center text-sm sm:text-base xl:text-lg font-normal">
        Get started now for free or integrate the React Component in your
        project.
      </h2>

      <div className="flex space-x-4">
        <Link
          href="/app"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Start APP
        </Link>
        {/* <ReactComponentButton /> */}
      </div>

      <div className="w-full h-full max-h-80 xl:max-h-96 overflow-hidden relative p-4 rounded-lg bg-white/10">
        <div className="w-full h-full overflow-y-auto scrollbar">
          <PreviewComponent />
        </div>
      </div>
    </main>
  );
}

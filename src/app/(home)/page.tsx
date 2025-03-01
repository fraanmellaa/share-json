import { Metadata } from "next";
// import Link from "next/link";
// import ReactComponentButton from "../components/ReactComponentButton";
import PreviewComponent from "../components/PreviewComponent";

export const metadata: Metadata = {
  title: "JSON Share",
};

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col space-y-4 items-center justify-center max-w-[700px] mx-auto relative">
      <p className="text-white font-normal flex items-center space-x-1 bg-yellow-500/30 border-2 border-yellow-500 px-5 py-2 rounded-full absolute top-4">
        <svg
          data-testid="geist-icon"
          height="16"
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width="16"
          className="text-yellow-100"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.55846 2H7.44148L1.88975 13.5H14.1102L8.55846 2ZM9.90929 1.34788C9.65902 0.829456 9.13413 0.5 8.55846 0.5H7.44148C6.86581 0.5 6.34092 0.829454 6.09065 1.34787L0.192608 13.5653C-0.127943 14.2293 0.355835 15 1.09316 15H14.9068C15.6441 15 16.1279 14.2293 15.8073 13.5653L9.90929 1.34788ZM8.74997 4.75V5.5V8V8.75H7.24997V8V5.5V4.75H8.74997ZM7.99997 12C8.55226 12 8.99997 11.5523 8.99997 11C8.99997 10.4477 8.55226 10 7.99997 10C7.44769 10 6.99997 10.4477 6.99997 11C6.99997 11.5523 7.44769 12 7.99997 12Z"
            fill="currentColor"
          ></path>
        </svg>

        <span className="ml-2">
          Share JSON will be launched soon. Stay tuned!
        </span>
      </p>
      <h1 className="text-7xl text-center uppercase font-extrabold from-blue-500  to-green-500 bg-gradient-to-r bg-clip-text text-transparent">
        Share JSON <span className="block">in a BEAUTIFUL WAY</span>
      </h1>
      <h2 className="text-white text-lg font-semibold">
        Get started now for free or integrate the React Component in your
        project.
      </h2>

      {/* <div className="flex space-x-4 pointer-events-none opacity-40">
        <Link
          href="/share"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Share JSON
        </Link>
        <ReactComponentButton />
      </div> */}

      <div className="w-full h-full max-h-96 overflow-hidden relative p-4 rounded-lg bg-white/10">
        <div className="w-full h-full overflow-y-auto scrollbar">
          <PreviewComponent />
        </div>
      </div>
    </div>
  );
}

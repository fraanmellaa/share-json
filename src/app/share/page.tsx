import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create JSON",
};

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col space-y-4 items-center justify-center max-w-[700px] mx-auto">
      <h1 className="text-7xl text-center uppercase font-extrabold from-blue-500  to-green-500 bg-gradient-to-r bg-clip-text text-transparent">
        Share
      </h1>
    </div>
  );
}

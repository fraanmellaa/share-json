import { Metadata } from "next";
import JsonInput from "../components/json/components/JsonInput";
import BackdropCard from "../components/BackdropCard";
import PrettifyButton from "../components/json/components/PrettifyButton";
import JsonCustomize from "../components/json/components/JsonCustomize";
import JsonSharing from "../components/json/components/JsonSharing";

export const metadata: Metadata = {
  title: "Create JSON",
};

export default function App() {
  return (
    <main className="w-full h-screen overflow-hidden flex flex-col space-y-4 items-center justify-start mx-auto px-10 pb-10 py-5">
      <div className="w-full max-h-full flex flex-col space-y-4 items-center justify-start">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 w-full max-h-full ">
          <BackdropCard>
            <JsonInput />
          </BackdropCard>
          <BackdropCard>
            <JsonCustomize />
          </BackdropCard>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 w-full h-[100px]">
          <PrettifyButton />
          <BackdropCard>
            <JsonSharing />
          </BackdropCard>
        </div>
      </div>
    </main>
  );
}

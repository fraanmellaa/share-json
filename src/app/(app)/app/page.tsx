import BackdropCard from "@/app/components/BackdropCard";
import JsonCustomize from "@/app/components/json/components/JsonCustomize";
import JsonInput from "@/app/components/json/components/JsonInput";
import JsonSharing from "@/app/components/json/components/JsonSharing";
import PrettifyButton from "@/app/components/json/components/PrettifyButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create JSON",
};

export default function App() {
  return (
    <main className="w-full h-full flex flex-col space-y-4 items-center justify-start mx-auto px-10 pt-5 pb-24 sm:pb-0">
      <div className="w-full h-full flex flex-col space-y-4 items-center justify-start">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-4 w-full h-full ">
          <BackdropCard>
            <JsonInput />
          </BackdropCard>
          <div className="xl:hidden w-full min-h-[50px] sm:min-h-[90px]">
            <PrettifyButton />
          </div>
          <BackdropCard>
            <JsonCustomize />
          </BackdropCard>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-4 w-full h-[100px]">
          <div className="hidden xl:block w-full h-full">
            <PrettifyButton />
          </div>
          <BackdropCard className="w-full">
            <JsonSharing />
          </BackdropCard>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useJsonStore } from "@/app/store/jsonStore";
import InfoBar from "../../InfoBar";
import ColorSelection from "./ColorSelection";
import FontSelection from "./FontSelection";

export default function CustomizationPanel() {
  const { customizationActivated, isGenerating, isGenerated } = useJsonStore();

  return (
    <div className="sm:px-4 w-full h-full flex flex-col items-start justify-between space-y-4 xl:space-y-0">
      <div className="sm:px-4 w-full h-full">
        <p className="text-left text-white font-bold text-base sm:text-2xl">
          Customization Panel
        </p>

        <div className=" mt-5 text-white">
          <div
            className={`flex flex-col items-start space-y-5 ${
              (!customizationActivated || isGenerating || isGenerated) &&
              "opacity-30 cursor-not-allowed pointer-events-none"
            }`}
          >
            <FontSelection />
            <ColorSelection />
          </div>
          <div className="relative mt-4 w-fit mx-auto xl:w-full">
            <InfoBar
              type="warning"
              text="Alpha version! More customization options soon."
            />
          </div>
        </div>
      </div>
      <div className="relative w-fit mx-auto xl:w-full">
        <InfoBar
          type="info"
          text="JSON will be removed after TWO DAYS after creation."
        />
      </div>
    </div>
  );
}

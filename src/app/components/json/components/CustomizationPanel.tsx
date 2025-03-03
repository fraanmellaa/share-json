"use client";

import { useJsonStore } from "@/app/store/jsonStore";
import InfoBar from "../../InfoBar";
import ColorSelection from "./ColorSelection";
import FontSelection from "./FontSelection";

export default function CustomizationPanel() {
  const { customizationActivated, isGenerating, isGenerated } = useJsonStore();

  return (
    <div className="p-4 w-full h-full flex flex-col items-start justify-between">
      <div className="p-4 w-full h-full">
        <p className="text-left text-white font-bold text-3xl">
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
          <div className="relative w-full">
            <InfoBar
              type="warning"
              text="Alpha version! More customization options soon."
            />
          </div>
        </div>
      </div>
      <div className="relative w-full mb-3   p-4">
        <InfoBar
          type="info"
          text="JSON will be removed after TWO DAYS after creation."
        />
      </div>
    </div>
  );
}

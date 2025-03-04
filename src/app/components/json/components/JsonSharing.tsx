"use client";

import { useJsonStore } from "@/app/store/jsonStore";
import Copy from "../../icons/Copy";
import { toast } from "@pheralb/toast";
import GenerateButton from "./GenerateButton";

export default function JsonSharing() {
  const { isGenerating, isGenerated, generatedLink } = useJsonStore();

  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(generatedLink);
      toast.success({
        text: "Copied",
        description: "Link copied to clipboard.",
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
      toast.error({
        text: "Copy Error",
        description: "Failed to copy link to clipboard.",
        theme: "dark",
      });
    }
  };

  return (
    <div className="p-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 h-full w-full">
      <GenerateButton />
      <div className="bg-[#0F0F0F] px-4 py-2 h-full flex items-center justify-center border-white/30 border-2 rounded-md w-full">
        <button
          type="button"
          disabled={!isGenerated}
          onClick={handleCopyLink}
          className={`text-white flex items-center justify-center w-fit ${
            !isGenerated ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <Copy />
          <div className="ml-4 opacity-50 w-[120px] xs:w-[170px] truncate">
            {isGenerating
              ? "Generating..."
              : isGenerated
              ? generatedLink
              : "Link generated..."}
          </div>
        </button>
      </div>
    </div>
  );
}

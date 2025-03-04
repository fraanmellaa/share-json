"use client";

import { generateLink, isJsonSizeValid } from "../hooks/jsonUtils";
import { toast } from "@pheralb/toast";
import { insertJson } from "@/app/lib/queries";
import { useJsonStore } from "@/app/store/jsonStore";
import Link from "../../icons/Link";

export default function GenerateButton() {
  const {
    jsonData,
    uiStyle,
    customizationActivated,
    isGenerating,
    isGenerated,
    setIsGenerating,
    setIsGenerated,
    setGeneratedLink,
  } = useJsonStore();

  const handleGenerateLink = () => {
    toast.loading({
      text: "Loading",
      theme: "dark",
      options: {
        promise: startGenerating(),
        success: "Link generated",
        error: "Try again",
        autoDismiss: true,
        onSuccess: () => {
          setIsGenerated(true);
          setIsGenerating(false);
        },
        onError: () => {
          setIsGenerated(false);
          setIsGenerating(false);
        },
      },
    });
  };

  const startGenerating = async () => {
    if (!jsonData) {
      toast.error({
        text: "JsonDataError",
        description: "No JSON data to generate link.",
        theme: "dark",
      });
      throw new Error("No JSON data to generate link.");
    }
    const isValid = isJsonSizeValid(jsonData);
    if (!isValid) {
      toast.error({
        text: "JsonDataError",
        description: "JSON data size exceeds the limit.",
        theme: "dark",
      });
      throw new Error("JSON data size exceeds the limit.");
    }

    setIsGenerating(true);
    const { url, json_id } = generateLink();
    setGeneratedLink(url);
    try {
      await insertJson(json_id, jsonData, uiStyle);
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to insert JSON data.");
    }
  };

  return (
    <button
      disabled={!customizationActivated || isGenerating || isGenerated}
      type="button"
      onClick={handleGenerateLink}
      className={`bg-gradient-to-r from-blue-400/30 h-full sm:whitespace-nowrap w-full  justify-center sm:w-fit to-green-400/30 border-2  border-white/30 text-xl text-white font-bold rounded-md px-6 py-2 flex items-center space-x-2 ${
        !customizationActivated || isGenerating || isGenerated
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer"
      }`}
    >
      <span>Generate Link</span> <Link />
    </button>
  );
}

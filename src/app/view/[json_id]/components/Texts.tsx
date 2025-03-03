"use client";

import GradientHeading from "@/app/components/GradientHeading";
import { useViewStore } from "@/app/store/viewStore";
import { toast } from "@pheralb/toast";
import { useState } from "react";

export default function Texts() {
  const { jsonData, created_at, loading } = useViewStore();
  const [countdown, setCountdown] = useState<string>("");

  const handleCopyJson = () => {
    try {
      navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2));
      toast.success({
        text: "Copied JSON",
        description: "JSON copied to clipboard.",
        theme: "dark",
      });
    } catch (error) {
      console.error(error);
      toast.error({
        text: "Failed to copy JSON",
        description: "Failed to copy JSON to clipboard. Please try again.",
        theme: "dark",
      });
    }
  };

  // necesito hacer un countdown desde created_at hasta created_at + 2 days
  const startCountdown = () => {
    if (!created_at) return;
    const created = new Date(created_at!);
    const now = new Date();
    const diff = created.getTime() + 2 * 24 * 60 * 60 * 1000 - now.getTime();
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diff % (60 * 1000)) / 1000);
    setCountdown(
      `${days}d ${hours}h ${minutes.toString().padStart(2, "0")}m ${seconds
        .toString()
        .padStart(2, "0")}s`
    );
  };

  setInterval(() => {
    startCountdown();
  }, 1000);

  return (
    <div className="flex flex-col w-full items-center justify-center space-y-5">
      <GradientHeading>Shared JSON Preview</GradientHeading>
      <div className="flex items-center justify-between space-x-1">
        <p>This JSON was generated at</p>
        {!created_at && loading ? (
          <div className="w-[160px] h-[20px] animate-pulse bg-gray-300/30 rounded-md"></div>
        ) : (
          <span>
            {created_at!.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
        )}
      </div>
      <div className="flex items-center justify-center space-x-1 text-red-500">
        <p>Will be removed on</p>
        {!countdown ? (
          <div className="w-[160px] h-[20px] animate-pulse bg-gray-300/30 rounded-md"></div>
        ) : (
          <span>{countdown}</span>
        )}
      </div>
      <button
        onClick={handleCopyJson}
        disabled={loading}
        type="button"
        className={`bg-gradient-to-r from-blue-400/30 to-green-400/30 border-2 px-4 py-2 border-white/30 text-xl text-white font-bold rounded-md ${
          loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        Copy JSON
      </button>
    </div>
  );
}

"use client";
import { useJsonStore } from "@/app/store/jsonStore";
import { toast } from "@pheralb/toast";

export default function PrettifyButton() {
  const { rawData, isGenerated, setJsonData, setCustomizationActivated } =
    useJsonStore();

  const handleClick = () => {
    try {
      const jsonData = JSON.parse(rawData);
      setJsonData(jsonData);
      setCustomizationActivated(true);
    } catch (error) {
      console.error(error);
      toast.error({
        text: "Invalid JSON",
        description: "Please check your JSON and try again",
        theme: "dark",
      });
    }
  };

  return (
    <button
      type="button"
      disabled={!rawData || isGenerated}
      onClick={handleClick}
      className={`bg-gradient-to-r from-blue-400/30 to-green-400/30 border-2  border-white/30 text-xl text-white font-bold rounded-md  ${
        !rawData || isGenerated
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer hover:from-blue-400/40 hover:to-green-400/40"
      }`}
    >
      Prettify and Start
    </button>
  );
}

"use client";
import { useJsonStore } from "@/app/store/jsonStore";

export default function JsonInput() {
  const {
    setRawData,
    setJsonData,
    setCustomizationActivated,
    isGenerating,
    isGenerated,
  } = useJsonStore();

  const mutipleLinesPlaceholder = `Insert your JSON here... 
Ex: {
  "name": "John Doe",
  "age": 30,
  "cars": {
    "car1": "Ford",
    "car2": "BMW",
    "car3": "Fiat"
  }
}`;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonData(null);
    setCustomizationActivated(false);
    setRawData(event.target.value);
  };

  return (
    <textarea
      disabled={isGenerating || isGenerated}
      className={`w-full h-[300px] xl:h-full resize-none outline-none border-none p-4 text-white font-semibold scrollbar ${
        (isGenerating || isGenerated) && "opacity-30 cursor-not-allowed"
      }`}
      placeholder={mutipleLinesPlaceholder}
      onChange={handleChange}
    ></textarea>
  );
}

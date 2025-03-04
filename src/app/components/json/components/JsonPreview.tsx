"use client";
import { JsonViewer } from "@franmella/json-viewer";
import { useJsonStore } from "@/app/store/jsonStore";

export default function JsonPreview() {
  const { jsonData, uiStyle } = useJsonStore();

  return (
    <div className="min-h-[450px] h-full md:min-h-[750px] md:max-h-[750px] overflow-hidden w-full">
      <div
        className={`h-full w-full overflow-y-auto scrollbar ${
          !jsonData && "bg-white/10 rounded-md"
        }`}
      >
        {jsonData ? (
          <JsonViewer data={jsonData} ui={uiStyle} />
        ) : (
          <div className="text-white text-center mt-2">No JSON data</div>
        )}
      </div>
    </div>
  );
}

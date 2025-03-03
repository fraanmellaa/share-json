"use client";
import { JsonViewer } from "@franmella/json-viewer";
import { useJsonStore } from "@/app/store/jsonStore";

export default function JsonPreview() {
  const { jsonData, uiStyle } = useJsonStore();

  return (
    <div className="h-[750px] overflow-hidden w-full">
      <div
        className={`h-full w-full overflow-x-auto ${
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

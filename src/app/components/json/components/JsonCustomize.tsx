import CustomizationPanel from "./CustomizationPanel";
import JsonPreview from "./JsonPreview";

function JsonCustomize() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-2 h-full w-full">
      <JsonPreview />
      <CustomizationPanel />
    </div>
  );
}

export default JsonCustomize;

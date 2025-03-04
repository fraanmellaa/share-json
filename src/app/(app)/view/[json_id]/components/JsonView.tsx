import { fetchJsonByJsonId } from "@/app/lib/queries";
import { notFound } from "next/navigation";
import Preview from "./Preview";

export default async function JsonView({ json_id }: { json_id: string }) {
  const json = await fetchJsonByJsonId(json_id);

  if (!json || !json.json_data || !json.ui_style) {
    notFound();
  }

  return (
    <div className="w-full sm:max-h-[750px] h-full overflow-hidden relative">
      <div className="w-full max-h-[350px] sm:h-full sm:max-h-full overflow-y-auto scrollbar">
        <Preview json={json} />
      </div>
    </div>
  );
}

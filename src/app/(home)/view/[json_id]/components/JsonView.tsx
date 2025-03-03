import { fetchJsonByJsonId } from "@/app/lib/queries";
import { notFound } from "next/navigation";
import Preview from "./Preview";

export default async function JsonView({ json_id }: { json_id: string }) {
  const json = await fetchJsonByJsonId(json_id);

  if (!json || !json.json_data || !json.ui_style) {
    notFound();
  }

  return (
    <div className="w-full h-full max-h-[750px] overflow-hidden relative">
      <div className="w-full h-full overflow-y-auto scrollbar">
        <Preview json={json} />
      </div>
    </div>
  );
}

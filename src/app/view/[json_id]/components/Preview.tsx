"use client";

import { JsonDB } from "@/app/lib/queries";
import { JsonData, JsonViewerUI } from "@/app/store/jsonStore";
import { useViewStore } from "@/app/store/viewStore";
import { JsonViewer } from "@franmella/json-viewer";
import { JSX, useEffect } from "react";

export default function Preview({ json }: { json: JsonDB }): JSX.Element {
  const { setJsonData, setUiStyle, setCreatedAt, setLoading } = useViewStore();
  const json_data = json.json_data as Record<string, JsonData> | JsonData[];
  const ui_style = json.ui_style as JsonViewerUI;
  const created_at = json.created_at as Date;

  useEffect(() => {
    if (json_data && ui_style) {
      setJsonData(json_data);
      setUiStyle(ui_style);
      setCreatedAt(created_at);
      setLoading(false);
    }
  }, [
    json_data,
    ui_style,
    created_at,
    setJsonData,
    setUiStyle,
    setCreatedAt,
    setLoading,
  ]);

  return <JsonViewer data={json_data} ui={ui_style} />;
}

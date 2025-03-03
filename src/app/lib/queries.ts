"use server";

import postgres, { JSONValue } from "postgres";
import { JsonData, JsonViewerUI } from "../store/jsonStore";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export interface JsonDB {
  id: number;
  json_id: string;
  json_data: JsonData;
  ui_style: JsonViewerUI;
  created_at: string;
}

export async function insertJson(
  json_id: string,
  jsonData: JsonData,
  uiStyles: JsonViewerUI
) {
  try {
    await sql`INSERT INTO json (json_id, json_data, ui_style) VALUES (${json_id}, ${sql.json(
      jsonData as JSONValue
    )}, ${sql.json(uiStyles as JSONValue)})`;

    return true;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to insert json data.");
  }
}

export async function fetchJsonByJsonId(json_id: string) {
  try {
    const result = await sql<JsonDB[]>`
      SELECT * FROM json WHERE json_id = ${json_id}
    `;

    return result[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch json data.");
  }
}

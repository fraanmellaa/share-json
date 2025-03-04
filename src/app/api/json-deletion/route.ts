import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
  try {
    const now = new Date();

    const result = await sql`
    DELETE FROM json
    WHERE created_at < ${new Date(now.setDate(now.getDate() - 2))}
  `;

    return NextResponse.json({
      status: 200,
      body: JSON.stringify(result),
    });
  } catch (error: unknown) {
    return NextResponse.json({
      status: 500,
      body: JSON.stringify({ error: error }),
    });
  }
}

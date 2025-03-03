import { Metadata } from "next";
import { Suspense } from "react";
import Skeleton from "./components/Skeleton";
import JsonView from "./components/JsonView";
import Texts from "./components/Texts";

export const metadata: Metadata = {
  title: "View JSON",
};

export default async function View(props: {
  params: Promise<{ json_id: string }>;
}) {
  const { json_id } = await props.params;

  return (
    <main className="h-screen w-full">
      <div className="max-w-[1400px] mx-auto space-y-5 min-h-full w-full grid grid-cols-2 place-items-center">
        <Suspense fallback={<Skeleton />}>
          <JsonView json_id={json_id} />
        </Suspense>
        <Texts />
      </div>
    </main>
  );
}

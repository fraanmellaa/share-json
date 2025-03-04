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
    <main className="max-w-[1400px] mx-auto space-y-5 px-2 py-10 sm:p-10 w-full flex flex-col justify-center items-center lg:flex-row h-screen">
      <Texts />
      <Suspense fallback={<Skeleton />}>
        <JsonView json_id={json_id} />
      </Suspense>
    </main>
  );
}

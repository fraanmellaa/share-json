import { allDocs } from "content-collections";
import { MDX } from "@/mdx/components";
import ResponsiveTocMenu from "@/app/(overview)/(documentation)/components/sidebar/ResponsiveTocMenu";

export default function DocumentationPage() {
  const document = allDocs.find((doc) => doc.slug === "nextjs");

  const nextJSFramework = {
    href: "/docs/framework-guides/nextjs",
    items: [
      {
        text: "Create a new Next.js project",
        href: "/docs/framework-guides/nextjs#create-a-new-nextjs-project",
      },
      {
        text: "Add the library",
        href: "/docs/framework-guides/nextjs#add-the-library",
      },
    ],
  };

  return (
    <article className="lg:pl-5 lg:pr-10 xl:pr-20 xl:pl-10">
      <h1 className="font-bold text-4xl">Usage with NextJS</h1>
      <p className="my-3">How to use the library with NextJS</p>
      <div className="mt-4">
        <ResponsiveTocMenu content={nextJSFramework} />
      </div>
      {document && <MDX code={document.mdx} />}
    </article>
  );
}

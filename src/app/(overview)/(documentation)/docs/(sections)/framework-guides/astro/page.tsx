import { allDocs } from "content-collections";
import { MDX } from "@/mdx/components";
import ResponsiveTocMenu from "@/app/(overview)/(documentation)/components/sidebar/ResponsiveTocMenu";

export default function DocumentationPage() {
  const document = allDocs.find((doc) => doc.slug === "astro");

  const astroFramework = {
    href: "/docs/framework-guides/astro",
    items: [
      {
        text: "Create a new Astro project",
        href: "/docs/framework-guides/astro#create-a-new-astro-project",
      },
      {
        text: "Add the library",
        href: "/docs/framework-guides/astro#add-the-library",
      },
    ],
  };

  return (
    <article className="lg:pl-5 lg:pr-10 xl:pr-20 xl:pl-10">
      <h1 className="font-bold text-4xl">Usage with Astro</h1>
      <p className="mt-3">How to use the library with Astro</p>
      <div className="mt-4">
        <ResponsiveTocMenu content={astroFramework} />
      </div>

      {document && <MDX code={document.mdx} />}
    </article>
  );
}

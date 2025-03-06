import { allDocs } from "content-collections";
import { MDX } from "@/mdx/components";
import ResponsiveTocMenu from "@/app/(overview)/(documentation)/components/sidebar/ResponsiveTocMenu";

export default function DocumentationPage() {
  const document = allDocs.find((doc) => doc.slug === "customization");

  const customization = {
    href: "/docs/component/customization",
    items: [
      {
        text: "Container",
        href: "/docs/component/customization#container",
      },
      {
        text: "Fonts",
        href: "/docs/component/customization#font--fonts",
      },
      {
        text: "Colors",
        href: "/docs/component/customization#colors",
      },
      {
        text: "Examples",
        href: "/docs/component/customization#examples",
      },
    ],
  };

  return (
    <article className="lg:pl-5 lg:pr-10 xl:pr-20 xl:pl-10">
      <h1 className="font-bold text-4xl">Json Viewer Customization</h1>
      <p className="my-3">How to customize component styles</p>
      <ResponsiveTocMenu content={customization} />
      {document && <MDX code={document.mdx} />}
    </article>
  );
}

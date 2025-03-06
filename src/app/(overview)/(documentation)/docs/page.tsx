import DocsHero from "./components/Hero";
import { allDocs } from "content-collections";
import { MDX } from "@/mdx/components";
import ResponsiveTocMenu from "../components/sidebar/ResponsiveTocMenu";

export default function DocumentationPage() {
  const document = allDocs.find((doc) => doc.slug === "index");

  const gettingStarted = {
    href: "/docs",
    items: [
      {
        text: "Framework Guides",
        href: "/docs#framework-guides",
      },
      {
        text: "Getting Started",
        href: "/docs#getting-started",
      },
    ],
  };

  return (
    <article className="lg:pl-5 lg:pr-10 xl:pr-20 xl:pl-10">
      <DocsHero />
      <div className="w-full mt-4">
        <ResponsiveTocMenu content={gettingStarted} />
      </div>
      {document && <MDX code={document.mdx} />}
    </article>
  );
}

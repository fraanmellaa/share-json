"use client";
import { useMDXComponent } from "@content-collections/mdx/react";

import FrameworkGuidesComponent from "../app/(overview)/(documentation)/components/FrameworkGuides";
import CodeblockMDX from "@/app/(overview)/(documentation)/components/codeblock/mdx";
import InstallLibrary from "../app/(overview)/(documentation)/components/InstallLibrary";
import { JsonViewer } from "@franmella/json-viewer";

interface MDXComponentsProps {
  code: string;
  className?: string;
}

export function MDX(props: MDXComponentsProps) {
  const Component = useMDXComponent(props.code);
  return (
    <Component
      components={{
        blockquote: (props) => (
          <blockquote
            className="border-l-4 border-[#333] pl-2 ml-2 text-sm text-white/80 mb-4"
            {...props}
          />
        ),
        h2: (props) => (
          <h2 className="text-2xl mt-10 font-semibold" {...props} />
        ),
        ol: (props) => (
          <ol
            className="text-[#777] ml-8 *:mt-10 *:mb-3 list-decimal"
            {...props}
          />
        ),
        ul: (props) => (
          <ul
            className="text-[#777] ml-8 *:my-2 *:text-sm list-disc"
            {...props}
          />
        ),
        pre: (props) => <CodeblockMDX {...props} />,
        p: (props) => <p className="text-white/50 my-2" {...props} />,
        hr: (props) => <hr className="border-transparent my-6" {...props} />,
        InstallLibrary,
        FrameworkGuidesComponent,
        JsonViewer,
      }}
    />
  );
}

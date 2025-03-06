"use client";

import {
  BundledLanguage,
  BundledTheme,
  createHighlighter,
  type HighlighterGeneric,
} from "shiki/bundle/web";

import { useState, useEffect, type ReactNode } from "react";
import { FileIcon, Loader } from "lucide-react";
import CopyToClipboardBtn from "./copyToClipboard";
import { Languages } from "./languages";

// To avoid getting all languages for shiki, use this type to get only the languages we need:
type Languages = "bash" | "tsx";

interface CodeHighlightProps {
  code: string;
  lang: Languages;
  noProseStyles?: boolean;
  className?: string;
  children?: ReactNode;
}

let highlighterInstance: HighlighterGeneric<
  BundledLanguage,
  BundledTheme
> | null = null;

const getHighlighter = async () => {
  if (!highlighterInstance) {
    highlighterInstance = await createHighlighter({
      themes: ["github-dark"],
      langs: ["bash", "tsx"],
    });
  }
  return highlighterInstance;
};

const CodeblockClient = ({ lang = "tsx", ...props }: CodeHighlightProps) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const selectedLanguage = Languages.find((langData) => langData.name === lang);

  useEffect(() => {
    async function highlightCode() {
      try {
        const highlighter = await getHighlighter();
        const html = await highlighter.codeToHtml(props.code, {
          lang,
          theme: "github-dark",
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error(
          "⚠️ codeblock/client.tsx - Error highlighting code:",
          error
        );
        setHighlightedCode(props.code);
      } finally {
        setIsLoading(false);
      }
    }
    highlightCode();
  }, [props.code, lang]);

  return (
    <div className={`relative  my-3 ${props.className}`}>
      <div className="flex items-center justify-between rounded-t-md border-l border-r border-t  px-1.5 py-1 border-white/10 bg-[#333]">
        <div className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400">
          {selectedLanguage?.icon ? (
            <selectedLanguage.icon className="h-[18px] w-[18px]" />
          ) : (
            <FileIcon size={14} />
          )}
          <span className="font-mono text-sm tracking-tight">
            {selectedLanguage?.name || lang}
          </span>
        </div>
        <div className="flex items-center space-x-3 text-neutral-500 dark:text-neutral-400">
          {props.children}
          <CopyToClipboardBtn content={props.code} />
        </div>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center py-3">
          <Loader size={16} className="animate-spin text-neutral-500" />
        </div>
      ) : (
        <div
          className={`overflow-y-auto bg-[#33333350]  rounded-b-sm border-x border-y p-3 font-mono text-sm border-white/10`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      )}
    </div>
  );
};

export default CodeblockClient;

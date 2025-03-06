import { type HTMLProps } from "react";

import { FileIcon } from "lucide-react";
import CopyToClipboardBtn from "./copyToClipboard";
import { Languages } from "./languages";

interface PreProps extends HTMLProps<HTMLPreElement> {
  rawstring?: string;
  ["data-language"]?: string;
}

const CodeblockMDX = (props: PreProps) => {
  const {
    children,
    rawstring = "",
    ["data-language"]: dataLanguage = "Shell",
  } = props;
  const selectedLanguage = Languages.find((lang) => lang.name === dataLanguage);
  return (
    <div className="relative">
      <div className="flex items-center justify-between rounded-t-md border-l border-r border-t px-1.5 py-1 border-white/10 bg-[#333]">
        <div className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400">
          {selectedLanguage?.icon ? (
            <selectedLanguage.icon className="h-[18px] w-[18px]" />
          ) : (
            <FileIcon size={14} />
          )}
          <span className="font-mono text-sm tracking-tight">
            {dataLanguage}
          </span>
        </div>
        <CopyToClipboardBtn content={rawstring} />
      </div>
      <pre className="overflow-x-auto rounded-t-none bg-[#33333350] border border-white/10 rounded-b-md p-4 text-sm">
        {children}
      </pre>
    </div>
  );
};

export default CodeblockMDX;

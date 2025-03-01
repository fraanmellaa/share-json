import { JSX } from "react";
import Warning from "./icons/Warning";

export default function InfoBar({
  type,
  text,
}: {
  type: string;
  text: string;
}): JSX.Element {
  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <Warning />;
      default:
        return null;
    }
  };

  return (
    <p className="text-white font-normal flex items-center space-x-1 bg-yellow-500/30 border-2 border-yellow-500 px-3 sm:px-5 py-2 rounded-full absolute top-4">
      {getIcon(type)}
      <span className="ml-2 text-xs sm:text-sm">{text}</span>
    </p>
  );
}

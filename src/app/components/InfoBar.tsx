import { JSX } from "react";
import Warning from "./icons/Warning";
import Info from "./icons/Info";

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

      case "info":
        return <Info />;

      default:
        return null;
    }
  };

  const getColors = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-yellow-500/30 border-yellow-500";

      case "info":
        return "bg-blue-500/30 border-blue-500";

      default:
        return "";
    }
  };

  return (
    <p
      className={`text-white font-normal flex items-center space-x-1  border-2  px-3 sm:px-5 py-2 rounded-full absolute top-4 ${getColors(
        type
      )}`}
    >
      {getIcon(type)}
      <span className="ml-2 text-xs sm:text-sm">{text}</span>
    </p>
  );
}

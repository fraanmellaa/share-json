import { ReactNode } from "react";

export default function BackdropCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`backdrop-blur-[2px] rounded-md border-2 border-white/30  ${className}`}
    >
      {children}
    </div>
  );
}

import { JSX } from "react";

import { ReactNode } from "react";

export default function GradientHeading({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center uppercase font-extrabold from-blue-500  to-green-500 bg-gradient-to-r bg-clip-text text-transparent">
      {children}
    </h1>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SectionItem = { text: string; href: string };

export default function SidebarSection({
  title,
  items,
}: {
  title?: string;
  items: Array<SectionItem>;
}) {
  const pathname = usePathname();

  return (
    <section className="w-full">
      {title && <p className="text-white/60 text-sm">{title}</p>}

      <div className={`w-full flex flex-col ${title && "mt-1.5"}`}>
        {items.map((item) => (
          <Link
            key={item.text}
            href={item.href}
            className={`py-2  group cursor-pointer  transition-all duration-300 ${
              pathname === item.href && title
                ? "border-white border-l pl-4 text-white"
                : title
                ? "text-white/60 hover:text-white border-l pl-4 border-white/20 hover:border-white hover:border-l"
                : pathname === item.href
                ? " text-white"
                : "text-white/60 hover:text-white "
            }`}
          >
            <span className="text-base ">{item.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";

export default function FrameworkCard({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-20 flex flex-col items-center justify-center space-y-2 py-5 rounded-md border-[#333] border bg-transparent hover:bg-[#33333340] transition-all duration-300"
    >
      {children}
    </Link>
  );
}

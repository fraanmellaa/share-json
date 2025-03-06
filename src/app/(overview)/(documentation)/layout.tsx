import DocsInPageSidebar from "./components/InPageSidebar";
import DocsNabvar from "./components/Navbar";
import DocsSidebar from "./components/Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full relative">
      <DocsNabvar />
      <div className="max-w-[1220px]  mx-auto h-full px-5">
        <div className="flex items-start justify-start w-full h-full space-x-4 relative">
          <DocsSidebar />
          <main className="w-full h-full pb-10 lg:max-w-[758px]">
            {children}
          </main>
          <DocsInPageSidebar />
        </div>
      </div>
    </div>
  );
}

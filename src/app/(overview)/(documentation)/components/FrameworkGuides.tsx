import Astro from "@/app/components/icons/Astro";
import FrameworkCard from "./FrameworkCard";
import Nextjs from "@/app/components/icons/Nextjs";

export default function FrameworkGuidesComponent() {
  return (
    <div className="grid grid-cols-1 w-full xs:grid-cols-2 xs:w-fit mt-5 gap-5">
      <FrameworkCard href="/docs/framework-guides/astro">
        <Astro width={42} height={42} />
        <p>Astro</p>
      </FrameworkCard>
      <FrameworkCard href="/docs/framework-guides/nextjs">
        <Nextjs width={42} height={42} />
        <p>Next.js</p>
      </FrameworkCard>
    </div>
  );
}

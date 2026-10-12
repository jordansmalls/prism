import { HomeActions } from "@/components/home-actions";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-6 text-center">
      <div className="flex max-w-xl flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight">{siteConfig.name}</h1>
        <p className="text-lg text-muted-foreground">{siteConfig.description}</p>
      </div>
      <HomeActions />
    </main>
  );
}

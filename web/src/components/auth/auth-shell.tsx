import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";
import { routes } from "@/lib/routes";

/**
 * Centered single-column layout for sign in, sign up and onboarding screens.
 */
export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-muted/40 p-6">
      <Link href={routes.home} className="text-lg font-semibold tracking-tight">
        {siteConfig.name}
      </Link>
      <main className="flex w-full max-w-sm flex-col">{children}</main>
    </div>
  );
}

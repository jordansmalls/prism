import type { Metadata } from "next";
import { Welcome } from "./welcome";

export const metadata: Metadata = { title: "Dashboard" };

// The layout's <AuthGuard> renders this page only after the session check.
export const instant = false;

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <Welcome />
    </>
  );
}

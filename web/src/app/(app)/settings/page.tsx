import type { Metadata } from "next";
import { AccountSettings } from "./account-settings";

export const metadata: Metadata = { title: "Settings" };

// The layout's <AuthGuard> renders this page only after the session check.
export const instant = false;

export default function SettingsPage() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your profile and account security.</p>
      </div>
      <AccountSettings />
    </>
  );
}

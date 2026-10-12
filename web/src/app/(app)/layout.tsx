import { AuthGuard } from "@/components/auth/auth-guard";
import { AppHeader } from "@/components/layout/app-header";
import { EmailVerificationBanner } from "@/components/layout/email-verification-banner";

export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <AuthGuard requirement="user">
      <AppHeader />
      <EmailVerificationBanner />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-8">{children}</main>
    </AuthGuard>
  );
}

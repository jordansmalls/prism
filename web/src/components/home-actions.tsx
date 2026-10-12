"use client";

import { ButtonLink } from "@/components/button-link";
import { Spinner } from "@/components/ui/spinner";
import { useMe } from "@/features/auth/queries";
import { routes } from "@/lib/routes";

export function HomeActions() {
  const { data: user, isPending } = useMe();

  if (isPending) return <Spinner className="size-5 text-muted-foreground" />;

  if (user) {
    return (
      <ButtonLink href={user.username ? routes.dashboard : routes.onboarding} size="lg">
        Go to dashboard
      </ButtonLink>
    );
  }

  return (
    <div className="flex gap-3">
      <ButtonLink href={routes.register} size="lg">
        Create account
      </ButtonLink>
      <ButtonLink href={routes.login} size="lg" variant="outline">
        Sign in
      </ButtonLink>
    </div>
  );
}

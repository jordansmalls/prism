"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@/features/auth/queries";

export function Welcome() {
  const user = useUser();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome, {user.name ?? `@${user.username}`}</CardTitle>
        <CardDescription>You&apos;re signed in. Build your app from here.</CardDescription>
      </CardHeader>
    </Card>
  );
}

/** Laravel API resources are wrapped in `data`. */
export type Resource<T> = { data: T };

export type MessageResponse = { message: string };

export type User = {
  id: number;
  name: string | null;
  username: string | null;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
};

export type AvailabilityReason = "taken" | "reserved";

export type Availability = {
  available: boolean;
  reason: AvailabilityReason | null;
};

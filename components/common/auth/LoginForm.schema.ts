import * as z from "zod";

export const baseSchema = z.object({
  identifier: z.string().min(2, { message: "Identifier too short." }),
  password: z.string().min(6, { message: "Password too short." }),
});

export const memberSchema = baseSchema.extend({
  organizationEmail: z
    .string()
    .email({ message: "Invalid organization email." }),
  organizationPassword: z
    .string()
    .min(6, { message: "Organization password too short." }),
});

export const schemas = {
  admin: baseSchema,
  member: memberSchema,
} as const;

export type Role = keyof typeof schemas;

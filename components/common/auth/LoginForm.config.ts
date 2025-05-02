import { Role } from "./LoginForm.schema";

export const fieldConfigs: Record<
  Role,
  {
    name: string;
    label: string;
    type?: string;
  }[]
> = {
  admin: [
    { name: "identifier", label: "Email or Phone Number" },
    { name: "password", label: "Password", type: "password" },
  ],
  member: [
    { name: "identifier", label: "Email or Phone Number" },
    { name: "password", label: "Your Password", type: "password" },
    {
      name: "organizationEmail",
      label: "Organization Email",
    },
    {
      name: "organizationPassword",
      label: "Organization Password",
      type: "password",
    },
  ],
};

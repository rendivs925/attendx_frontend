import { ComponentPropsWithoutRef } from "react";
import { Role } from "./LoginForm.schema";

export interface LoginFormProps extends ComponentPropsWithoutRef<"div"> {
  role: Role;
}

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schemas } from "@/components/common/auth/LoginForm.schema";
import { useAuthStore } from "@/stores/useAuthStore";
import { LoginRequest } from "@/api/authApi";

export const useLoginForm = (role: keyof typeof schemas) => {
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);

  const schema = schemas[role];
  type SchemaType = typeof schema._type;

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: Object.fromEntries(
      Object.keys(schema.shape).map((key) => [key, ""]),
    ) as SchemaType,
  });

  const onSubmit = async (values: SchemaType) => {
    setLoading(true);
    try {
      await login({ ...values, role } as LoginRequest);
      console.log("Login successful");
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, onSubmit, schema };
};

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FormFieldBlock } from "./LoginForm.fields";
import { fieldConfigs } from "./LoginForm.config";
import { LoginFormProps } from "./LoginForm.types";
import { useLoginForm } from "@/hooks/auth/useLoginForm";

export function LoginForm({ className, role, ...props }: LoginFormProps) {
  const { form, loading, onSubmit } = useLoginForm(role);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            {role === "admin"
              ? "Login with your admin credentials."
              : "Login using your personal and organization credentials."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              {fieldConfigs[role].map(({ name, label, type }) => (
                <FormFieldBlock
                  key={name}
                  control={form.control}
                  name={name}
                  label={label}
                  type={type}
                />
              ))}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

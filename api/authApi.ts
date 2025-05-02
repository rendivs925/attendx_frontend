import { Role } from "@/components/common/auth/LoginForm.schema";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8000";

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface LoginRequest {
  identifier: string;
  password: string;
  role: Role;
  organizationEmail?: string;
  organizationPassword?: string;
}

export interface LoginResponse {
  token: string;
  user: {
    _id: string;
    name: string;
    role?: string;
  };
}

export const loginUser = async (
  credentials: LoginRequest,
): Promise<LoginResponse> => {
  const { data } = await apiClient.post<LoginResponse>("/login", credentials);
  return data;
};

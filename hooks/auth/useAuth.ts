import { loginUser, LoginRequest } from "@/api/authApi";

export const useAuth = () => {
  const login = async (credentials: LoginRequest) => {
    try {
      const data = await loginUser(credentials);
      console.log("Login successful:", data);
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error;
    }
  };

  return { login };
};

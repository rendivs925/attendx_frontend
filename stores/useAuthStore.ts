import { create } from "zustand";
import { loginUser, LoginRequest, LoginResponse } from "@/api/authApi";

interface AuthState {
  token: string | null;
  user: LoginResponse["user"] | null;
  loading: boolean;
  error: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const login = async (credentials: LoginRequest) => {
    set({ loading: true, error: null });

    try {
      const response = await loginUser(credentials);
      set({
        token: response.token,
        user: response.user,
        loading: false,
        error: null,
      });
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Login failed";
      set({ loading: false, error: errorMessage });
    }
  };

  const logout = () => {
    set({ token: null, user: null, error: null });
  };

  return {
    token: null,
    user: null,
    loading: false,
    error: null,
    login,
    logout,
  };
});

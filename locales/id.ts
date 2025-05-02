import { MessageKey } from "@/types";

export const id: Record<MessageKey, string> = {
  LOGIN_SUCCESS: "Berhasil masuk.",
  INVALID_CREDENTIALS: "Email atau kata sandi salah.",
  REQUIRED_FIELD: "Kolom ini wajib diisi.",
  SERVER_ERROR: "Terjadi kesalahan. Silakan coba lagi nanti.",
};

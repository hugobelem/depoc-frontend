import axios from "axios";
import { BaseAPI } from "../baseAPI";
import { setCookie } from "@/app/lib/api/auth/cookie";

export type LoginResult =
  | { ok: true }
  | { ok: false; message: string; code: string };

export async function Login(
  username: string,
  password: string
): Promise<LoginResult> {
  const api = BaseAPI.create({ withCredentials: true });

  try {
    const res = await api.post("/token", { username, password });
    setCookie(res.data.access);
    return { ok: true };
  } catch (err) {
    if (!axios.isAxiosError(err)) {
      return { ok: false, code: "UNKNOWN", message: "Unexpected error" };
    }

    if (err.response) {
      switch (err.response.status) {
        case 400:
        case 401:
          return {
            ok: false,
            code: "INVALID_CREDENTIALS",
            message: "username or password is incorrect",
          };
        case 429:
          return {
            ok: false,
            code: "RATE_LIMIT",
            message: "too many atempts. try again later",
          };
        default:
          return {
            ok: false,
            code: "SERVER_ERROR",
            message: "server error. try again later",
          };
      }
    }

    if (err.request) {
      return {
        ok: false,
        code: "NETWORK_ERROR",
        message: "cannot reach server",
      };
    }

    return {
      ok: false,
      code: "CLIENT_ERROR",
      message: "request failed",
    };
  }
}

import { BaseAPI } from "./baseAPI";

export const AuthAPI = (token: string | null) => {
  if (!token) return BaseAPI;

  return BaseAPI.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

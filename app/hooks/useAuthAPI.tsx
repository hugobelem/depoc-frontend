"use client";

import { useMemo } from "react";
import { ACCESS_TOKEN } from "../lib/constants";
import { AuthAPI } from "../lib/api/authAPI";

export const UseAuthAPI = () => {
  return useMemo(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem(ACCESS_TOKEN) : null;
    return AuthAPI(token);
  }, []);
};

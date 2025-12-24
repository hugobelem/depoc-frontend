"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
import { jwtDecode } from "jwt-decode";
import { UseAuthAPI } from "../hooks/useAuthAPI";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const api = UseAuthAPI();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      await auth();
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthorized === false) {
      router.push("/login");
    }
  }, [isAuthorized, router]);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("token/refresh", { refresh: refreshToken });
      console.log(res.data);
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access_token);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }
    const decode = jwtDecode(token);
    const tokenExpiration = decode.exp;
    const now = Date.now() / 1000;
    if (tokenExpiration && tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  };

  if (isAuthorized === null) return <div>Loading...</div>;

  if (isAuthorized) return <>{children}</>;
}

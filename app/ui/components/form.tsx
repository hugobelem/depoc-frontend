"use client";

import { useState } from "react";
import { ACCESS_TOKEN,  REFRESH_TOKEN} from "@/app/lib/constants";
import { useRouter } from "next/navigation";
import { UseAuthAPI } from "@/app/hooks/useAuthAPI";

interface LoginFormProps {
  route: string;
}

export default function LoginForm({ route }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const api = UseAuthAPI();
  
  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(route, { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      router.push("/");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h1>Login</h1>
      <input
        className=""
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        className=""
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button className="" type="submit">
        Submit
      </button>
    </form>
  );
}

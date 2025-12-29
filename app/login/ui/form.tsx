"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Login } from "@/app/lib/api/auth/login";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = await Login(username, password);
    if (result.ok) {
      router.push("/");
      return;
    } else {
      setError(result.message);
      return;
    }
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="ring-1 ring-black/10 bg-white p-6 sm:w-4/12 w-10/12 rounded-xl shadow-xl relative">
        <button className="absolute top-4 right-4 text-lg text-black px-4 py-2 rounded"></button>
        <div className="w-full">
          <div className="relative flex items-center gap-4">
            <div className="text-sm leading-5">
              <kbd className="text-zinc-500">DEPOC</kbd>
            </div>
          </div>
        </div>

        <span className="flex items-center mt-4">
          <span
            className="
                h-px flex-1 
                bg-black/10"
          ></span>
        </span>

        <div className="p-4 sm:p-4 mt-4">
          <p
            className="
                  text-3xl
                  text-center
                  font-semibold
                  text-black"
          >
            <kbd>log in</kbd>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          method="POST"
          className="ml-auto mr-auto mt-4"
        >
          <div className="border border-zinc-300 focus-within:border-black bg-white rounded-md">
            <div className="relative flex items-center justify-between p-1">
              <input
                autoFocus
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full text-xs text-black/80 p-2 bg-transparent outline-none"
                placeholder="email or username"
              />
            </div>
          </div>

          <div className="mt-4 border border-zinc-300 focus-within:border-black bg-white rounded-md">
            <div className="relative flex items-center justify-between p-1">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-xs text-black/80 p-2 bg-transparent outline-none"
                placeholder="password"
              />
            </div>
          </div>
          <p className="text-end">
            <a href="" className="mt-2 text-xs text-zinc-500">
              forgot password?
            </a>
          </p>

          <div className="mt-4 text-start">
            <button
              type="submit"
              className="cursor-pointer text-xs rounded-md px-4 py-1 border border-black/80 bg-white hover:bg-zinc-50 text-black/80"
            >
              log in
            </button>
          </div>
        </form>

        <ul className="text-start">
          <li>
            {error && (
              <span className="inline-flex items-start mt-8 text-xs text-orange-600">
                {error}
              </span>
            )}
          </li>
        </ul>

        <p className="mt-14 text-xs text-zinc-400">
          don't have an account?{" "}
          <a href="" className="text-xs text-zinc-500">
            register
          </a>
        </p>
      </div>
    </div>
  );
}

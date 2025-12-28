"use server";

import { cookies } from "next/headers";

export async function setCookie(cookie: string) {
  const cookieStore = await cookies()

  cookieStore.set("access", cookie, {
    httpOnly: true,
    secure: true,
  });
}

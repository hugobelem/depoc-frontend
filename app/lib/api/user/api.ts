import { USER_ENDPOINT } from "../endpoints";
import { Request } from "../request";
import type { User } from "./model";
import { cache } from "react";

export const getUser = cache(async () => {
  const data = await Request<User>(USER_ENDPOINT);
  if (data) return data.user
})

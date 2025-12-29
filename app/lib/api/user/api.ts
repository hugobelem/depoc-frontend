import { USER_ENDPOINT } from "../endpoints";
import { Request } from "../request";
import type { User } from "./model";

export async function UserAPI() {
  const data = await Request<User>(USER_ENDPOINT);
  if (data) return data.user;
}

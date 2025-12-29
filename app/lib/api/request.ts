"use server";

import { cookies } from "next/headers";
import { BaseAPI } from "./baseAPI";
import { Method, AxiosRequestConfig } from "axios";

export async function Request<T>(
  url: string,
  method: Method = "GET",
  data?: any
): Promise<T | null> {
  const config: AxiosRequestConfig = {
    url,
    method,
    headers: {},
    data,
  };

  const cookieStore = await cookies();
  const access = cookieStore.get("access")?.value;

  const api = BaseAPI.create({
    headers: { Authorization: access ? `Bearer ${access}` : undefined },
  });

  const response = await api.request<T>(config)
  .catch(function (err) {
    if (err.response) {
      console.log(err.response.data.error.message);
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log('Error', err.message);
    }
  });

  if (response) {
    return response.data
  } else {
    return null
  }
}

import { FINANCE_ACCOUNTS_ENDPOINT } from "../../endpoints";
import { Request } from "../../request";
import type { Finance } from "./model";

export async function FinanceAPI() {
  const data = await Request<Finance>(FINANCE_ACCOUNTS_ENDPOINT);
  if (data) return data.results;
}

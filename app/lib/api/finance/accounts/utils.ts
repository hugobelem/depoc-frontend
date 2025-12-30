export const dynamic = "force-dynamic";

import { FinanceAPI } from "./api";

export async function calculateTotalBalance() {
  const results = await FinanceAPI();
  return results?.reduce((acc, r) => acc + Number(r.account.balance), 0) ?? 0;
}

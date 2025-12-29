export const dynamic = "force-dynamic";

import { FinanceAPI } from "./api";

export async function calculateTotalBalance() {
  let totalBalance: number = 0;
  const results = await FinanceAPI();

  if (results)
    for (const result of results) {
      const balance = Number(result.account.balance);
      totalBalance += balance;
    }

  return totalBalance;
}

import { FINANCE_TRANSACTIONS_ENDPOINT } from "../../endpoints";
import { Request } from "../../request";
import type { FinanceTransactions } from "./model";

export async function FinanceTransactionAPI() {
  const data = await Request<FinanceTransactions>(
    FINANCE_TRANSACTIONS_ENDPOINT
  );
  if (data) return data.results;
}

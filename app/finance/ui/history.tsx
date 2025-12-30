import { FinanceTransactionAPI } from "@/app/lib/api/finance/history/api";
import formatBalance from "@/app/lib/utils/formatBalance";
import formatDate from "@/app/lib/utils/formatDate";
import clsx from "clsx";
import React from "react";

export default async function History() {
  const results = await FinanceTransactionAPI();
  return (
    <div className="w-full col-span-2 p-1 sm:px-4">
      <div className="relative ring-1 ring-black/5 bg-white rounded-lg w-full p-4">
        <div className="overflow-x-auto no-scrollbar">
          <div>
            <table className="min-w-full table-fixed text-start text-sm">
              <colgroup>
                <col className="w-fit" />
                <col className="w-full sm:w-fit" />
                <col className="w-fit" />
                <col className="w-fit" />
                <col className="w-fit" />
                <col className="w-fit" />
              </colgroup>

              {results?.map((result, i) => {
                const currentDate = formatDate(result.transaction.timestamp);
                const previousDate =
                  i > 0
                    ? formatDate(results[i - 1].transaction.timestamp)
                    : null;

                const showHeader = currentDate !== previousDate;

                return (
                  <React.Fragment key={result.transaction.id}>
                    {showHeader && (
                      <thead>
                        <tr>
                          <th
                            colSpan={6}
                            className="text-sm font-normal text-black/40 text-left"
                          >
                            <kbd>
                              {formatDate(result.transaction.timestamp, true)}
                            </kbd>
                          </th>
                        </tr>
                      </thead>
                    )}

                    <tbody>
                      <tr className="cursor-pointer hover:bg-[#f7f7f5]">
                        <td className="whitespace-nowrap p-4 text-black/60 rounded-s-3xl">
                          {result.transaction.type === "debit" && (
                            <button className="rounded-full p-1.5 border border-black/60">
                              <svg
                                className="w-3.75 sm:w-4.5 h-3.75 sm:h-4.5 text-black/60"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M5 12h14"
                                />
                              </svg>
                            </button>
                          )}
                          {result.transaction.type === "credit" && (
                            <button className="rounded-full p-1.5 border border-black/60">
                              <svg
                                className="w-3.75 sm:w-4.5 h-3.75 sm:h-4.5 text-black/60"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M5 12h14m-7 7V5"
                                />
                              </svg>
                            </button>
                          )}
                          {result.transaction.type === "transfer" && (
                            <button className="rounded-full p-1.5 border border-black/60">
                              <svg
                                className="w-3.75 sm:w-4.5 h-3.75 sm:h-4.5 text-black/60"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M4 16h13M4 16l4-4m-4 4 4 4M20 8H7m13 0-4 4m4-4-4-4"
                                />
                              </svg>
                            </button>
                          )}
                        </td>

                        <td className="whitespace-nowrap p-4 text-black/60 font-normal">
                          <span
                            className={clsx({
                              "text-orange-600": result.transaction.amount < 0,
                            })}
                          >
                            {formatBalance(result.transaction.amount)}
                          </span>
                        </td>

                        <td className="whitespace-nowrap p-4 text-black/60 text-end sm:text-start sm:rounded-none rounded-e-3xl">
                          <span className="ring-1 ring-black/15 rounded-md px-1.5 py-0.5 text-[13px] sm:text-sm">
                            {result.transaction.account.name}
                          </span>
                        </td>

                        <td className="whitespace-normal p-4 text-black/60 font-semibold hidden sm:table-cell">
                          {result.transaction.contact.name?.toLowerCase()}
                        </td>

                        <td className="whitespace-normal p-4 text-black/60 italic hidden sm:table-cell">
                          {result.transaction.description.toLowerCase()}
                        </td>

                        <td className="whitespace-nowrap p-4 text-black/60 rounded-e-3xl hidden sm:table-cell">
                          <span className="bg-background ring-1 ring-black/15 rounded-full px-2 py-0.5 text-[12px]">
                            {formatDate(result.transaction.timestamp)}
                          </span>
                        </td>
                      </tr>
                    </tbody>

                    {i < results.length - 1 && (
                      <tbody>
                        <tr className="h-8" />
                      </tbody>
                    )}
                  </React.Fragment>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

import clsx from "clsx";
import { Box } from "./ui/components/box";
import { Header } from "./ui/components/header";
import formatBalance from "./lib/utils/formatBalance";
import { calculateTotalBalance } from "./lib/api/finance/accounts/utils";

export default async function Home() {
  const totalBalance = await calculateTotalBalance();
  return (
    <div className="list-none grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
      <Header description="settings and what not" href="#"></Header>

      <Box
        title="POS"
        description="start selling"
        href="#"
        colSpan={1}
        colSpanMobile={2}
        minHeight="md"
      ></Box>

      {/* if user does not have a business do not show this */}
      <Box
        title={formatBalance(totalBalance)}
        description="total balance"
        href="/finance"
        colSpan={1}
        colSpanMobile={1}
        minHeight="md"
        className="row-span-2 lg:row-start-2"
        titleClassName={clsx({ "text-orange-600": totalBalance < 0 })}
      ></Box>

      <Box
        title="CONTACTS"
        description="search"
        href="#"
        colSpan={1}
        colSpanMobile={1}
        minHeight="md"
      ></Box>

      <Box
        title="PRODUCTS"
        description="skus"
        href="#"
        colSpan={1}
        colSpanMobile={1}
        minHeight="md"
      ></Box>
    </div>
  );
}

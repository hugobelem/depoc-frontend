import Header from "./ui/header";
import BankAccount from "./ui/accounts";
import FilterButtons from "./ui/filter";
import Totals from "./ui/totals";
import History from "./ui/history";

export default async function page() {
  return (
    <div className="list-none grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-1 xl:grid-cols-2 xl:grid-rows-1">
      <Header></Header>
      <BankAccount></BankAccount>
      <FilterButtons></FilterButtons>
      <Totals></Totals>
      <History></History>
    </div>
  );
}

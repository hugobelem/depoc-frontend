import { Box } from "./ui/components/box";
import { Header, HeaderMobile } from "./ui/components/header";
import { Request } from "./lib/api/request";

  type Data = {
    user: {
      id: string;
      name: string;
      email: string;
      username: string;
    }
  }

export default async function Home() {
  const data = await Request<Data>("/me")
  return (
      <div className="list-none grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
        <Header
          firstName={data.user.name.toUpperCase()}
          email={data.user.email}
          description="settings and what not"
          href="#"
        ></Header>

        <HeaderMobile
          firstName={data.user.name.toUpperCase()}
          email={data.user.email}
          href="#"
        ></HeaderMobile>

        <Box
          title="POS"
          description="start selling"
          href="#"
          colSpan={1}
          colSpanMobile={2}
          minHeight="md"
        ></Box>

        <Box
          title="R$12.590,25"
          description="total balance"
          href="#"
          colSpan={1}
          colSpanMobile={1}
          minHeight="md"
          className="row-span-2 lg:row-start-2"
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

import { BackButton } from "./ui/backButton";
import { Header } from "./ui/header";
import { ContentCard } from "./ui/content";
import { Footer } from "./ui/footer";

export default function Page() {
  return (
    <div className="min-h-fit mt-6 w-full sm:w-5/12 bg-[#f7f7f5] flex justify-center ml-auto mr-auto">
      <div className="w-full max-w-5xl bg-white shadow-sm ring-1 ring-black/5 rounded-2xl my-8 p-6">
        <BackButton></BackButton>
        <Header></Header>
        <ContentCard></ContentCard>
        <Footer></Footer>
      </div>
    </div>
  );
}

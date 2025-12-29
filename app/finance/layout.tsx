import "@/app/ui/globals.css";

export default function FinanceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

import "@/app/ui/globals.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="flex flex-col">{children}</section>;
}

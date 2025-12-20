import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "DEPOC",
  description: "Point of Sale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </head>
      <body className={`${inter.className} antialiased bg-black`}>
        <section className="flex flex-col">
          <div className="p-4 grow overflow-auto">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}

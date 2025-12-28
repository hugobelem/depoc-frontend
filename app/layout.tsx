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
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
        <link
          rel="icon"
          type="image/x-ico"
          href="../static/assets/favicon.ico"
        ></link>
        <link 
          rel="apple-touch-icon" 
          sizes="180x180" 
          href="../static/assets/apple-touch-icon.png">
        </link>
        <link 
          rel="icon" 
          type="image/png" 
          sizes="32x32" 
          href="../static/assets/favicon-32x32.png">
        </link>
        <link 
          rel="icon" 
          type="image/png" 
          sizes="16x16" 
          href="../static/assets/favicon-16x16.png">
        </link>
      </head>
      <body className={`${inter.className} antialiased bg-[#f7f7f5]`}>
        <section className="flex flex-col">
          <div className="p-4 grow overflow-auto">{children}</div>
        </section>
      </body>
    </html>
  );
}

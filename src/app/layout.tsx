import type { Metadata } from "next";
import "./globals.css";
import Reduxprovider from "@/store/redux-provider";

export const metadata: Metadata = {
  title: "Loom Fare",
  description:
    "Send, receive, trade and invest in Bitcoin and cryptocurrency all in one safe and simple Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`antialiased grid`} suppressHydrationWarning>
        <Reduxprovider>{children}</Reduxprovider>
      </body>
    </html>
  );
}

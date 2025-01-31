// import Translator from "@/components/translator";

import Header from "@/components/auth/_shared/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen overflow-hidden">
      <Header />
      <main className="w-full h-full grid content-center">{children}</main>
    </div>
  );
}

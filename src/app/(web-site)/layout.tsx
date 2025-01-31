import Header from "@/components/web-site/_shared/header";
import Footer from "@/components/web-site/home-page/footer";

export default function WebSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <div className="grid grid-rows-[auto_1fr]"> */}
      {/* <Translator /> */}
      <div className="relative">
        <Header />
        {children}
        <Footer />
        {/* </div> */}
      </div>
    </>
  );
}

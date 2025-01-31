import Header from "@/components/web-app/header";
import MobileNav from "@/components/web-app/mobile-nav";
import SideNav from "@/components/web-app/side-nav";
import UserAuthentication from "@/components/web-app/user-authentication";

export default function WebAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserAuthentication>
      <div className="grid lg:grid-cols-[auto_1fr] h-full w-full top-0 left-0 fixed overflow-hidden">
        <SideNav />
        <div className="grid grid-rows-[auto_1fr_auto] lg:grid-rows-[auto_1fr] overflow-hidden h-full">
          <Header />
          {children}
          <MobileNav />
        </div>
      </div>
    </UserAuthentication>
  );
}

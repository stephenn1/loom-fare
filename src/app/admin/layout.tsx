import AdminAuthentication from "@/components/admin/admin-authentication";
import Header from "@/components/admin/header";
import SideNav from "@/components/admin/side-nav";

export default function WebAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminAuthentication>
      <div className="grid grid-rows-[1fr_auto] lg:grid-cols-[auto_1fr] h-full w-full fixed top-0 left-0 overflow-hidden">
        <SideNav />
        <div className="grid grid-rows-[auto_1fr] overflow-hidden h-full">
          <Header />
          {children}
        </div>
      </div>
    </AdminAuthentication>
  );
}

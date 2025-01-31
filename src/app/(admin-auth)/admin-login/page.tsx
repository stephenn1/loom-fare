import Form from "@/components/auth/admin-login/form";
import React from "react";

export default function Page() {
  return (
    <div className="max-w-lg mx-auto w-full grid content-center gap-5 layout-space">
      <p className="text-3xl font-bold text-primary text-center pb-5">
        Admin Login
      </p>

      <Form />
    </div>
  );
}

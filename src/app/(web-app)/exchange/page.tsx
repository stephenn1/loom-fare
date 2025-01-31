import Exchange from "@/components/web-app/exchange";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <main className="grid overflow-hidden">
        <Exchange />
      </main>
    </Suspense>
  );
}

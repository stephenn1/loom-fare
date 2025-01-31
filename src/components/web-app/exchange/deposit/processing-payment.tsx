import { Button } from "@/ui";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function ProcessingPayment() {
  return (
    <div className="w-full max-w-3xl grid content-center mx-auto">
      <div className="bg-secondary px-5 py-10 grid gap-5 rounded-xl">
        <FaCheckCircle className="mx-auto text-5xl text-green-500" />

        <div className="grid text-center gap-3 content-start">
          <p className="text-xl sm:text-2xl font-bold text-gray-600">
            Payment Confirmation
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Thank you! We&apos;ve received your payment confirmation. Our team
            is verifying your transaction. This process may take a few minutes.
          </p>
        </div>
      </div>

      <Link href={"/dashboard"} className="grid mt-10">
        <Button className="mx-auto py-3 w-full max-w-sm">
          Return To Dashboard
        </Button>
      </Link>
    </div>
  );
}

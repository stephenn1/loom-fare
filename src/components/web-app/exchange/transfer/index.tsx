import { RootState } from "@/store";
import { Button, ButtonVariants, Input, Inputs } from "@/ui";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Transfer() {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="bg-white rounded-r-lg grid gap-10 content-start h-full py-5 px-5 overflow-auto custom-scroll-bar">
      <div className="grid gap-3">
        <p className="text-2xl font-medium">Share Funds</p>
        <p className="text-sm sm:text-base text-gray-500 max-w-3xl">
          Transfers can only be made to other Loomfare users. Please ensure the
          recipient has a Loomfare account before proceeding. If they
          haven&apos;t signed up yet, they will need to create an account to
          receive funds
        </p>
      </div>
      <form
        onSubmit={() => {}}
        className="max-w-2xl mx-auto w-full min-h-full grid grid-rows-[1fr_auto]"
      >
        <div className="grid content-start gap-5 p-5 rounded-lg bg-primary bg-opacity-10">
          <Input
            type={Inputs.Text}
            name="email"
            id="email"
            label="Receivers Email"
            placeholder="receiver's email with loomfare"
            required
          />
          <Input
            type={Inputs.Number}
            name="amount"
            id="amount"
            label="Amount"
            placeholder={`available balance: $${user?.balance}`}
            required
          />
        </div>

        <div>
          <Button
            type="submit"
            //   isLoading={isLoading}
            disabled={!isFormComplete && user?.balance < 10}
            variant={ButtonVariants.PrimaryFilled}
            className="mx-auto w-full mt-5 py-3 px-20"
          >
            Proceed
          </Button>
        </div>
      </form>
    </div>
  );
}

import { WITHDRAWAL_METHODS } from "@/constants/withdrawal-methods";
import { Button, Input, Inputs } from "@/ui";
import { div, h1 } from "motion/react-client";
import React from "react";

export default function AccDetails() {
  return (
    <form className="max-w-2xl mx-auto w-full min-h-full grid grid-rows-[1fr_auto]">
      <div className="grid content-start gap-5 p-5 rounded-lg bg-primary bg-opacity-10">
        <Input
          type={Inputs.Number}
          name="User Id"
          id="user-id"
          label="User I'd"
          placeholder="Input User Id"
          required
        />
        <Input
          type={Inputs.Number}
          name="amount"
          id="amount"
          label="Amount"
          placeholder="Enter Transfer Amount"
          required
        />
        <p className="">Available Balance</p>
      </div>

      <div>
        <Button type="submit" className="mx-auto w-full mt-5 py-3 px-20">
          Proceed
        </Button>
      </div>
    </form>
  );
}

import { Button, Input, Inputs } from "@/ui";
import React from "react";

export default function Security() {
  return (
    <div className="px-5 sm:px-10">
      <div className="grid gap-3 border-t border-gray-300 pt-5">
        <p className="text-xl text-gray-600">Security</p>

        <div className="bg-gray-100 rounded-xl p-5 sm:p-10 grid gap-5">
          <Input type={Inputs.Password} id="" name="" label="New Password" />

          <Input
            type={Inputs.Password}
            id=""
            name=""
            label="Confirm Password"
          />

          <Button className="w-full max-w-xs mx-auto py-3 sm:mt-5">
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
}

import { db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { FormEvent, useState } from "react";
import { User } from "@/store/slices/user.slice";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { Input, Inputs } from "@/ui";
import { AccountStatus } from "@/@types";

interface UpdateStatusProps {
  user: User | { [field: string]: any };
  refresh: () => void;
}

export default function UpdateStatus({ user, refresh }: UpdateStatusProps) {
  const [isUpadtingStatus, setIsUpadtingStatus] = useState(false);

  const handleUpdateStatus = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsUpadtingStatus(true);
    const formData = new FormData(e.currentTarget);
    const status = formData.get("status") as string;

    await setDoc(doc(db, "users", user.email), {
      ...user,
      status,
    }).catch(() => {});

    setIsUpadtingStatus(false);
    refresh();
  };

  return (
    <div className="content-start h-full grid gap-2">
      <label className="text-sm font-semibold text-gray-400 grid grid-flow-col w-max items-center gap-3">
        <MdOutlineSystemUpdateAlt className="text-xl" />
        Update User Status
      </label>

      <form onSubmit={handleUpdateStatus} className="grid gap-5">
        <div className="grid gap-3">
          <Input
            type={Inputs.Select}
            name="status"
            options={Object.values(AccountStatus)}
            defaultValue={user.status}
          />
        </div>

        <button
          disabled={isUpadtingStatus}
          className={`text-sm bg-primary text-white px-y py-3 w-40 rounded-lg font-semibold grid place-content-center justify-self-end ${
            isUpadtingStatus && "opacity-60"
          }`}
        >
          {isUpadtingStatus ? (
            <span className="block w-4 h-4 rounded-full border border-white border-b-transparent animate-spin"></span>
          ) : (
            "Update User Status"
          )}
        </button>
      </form>
    </div>
  );
}

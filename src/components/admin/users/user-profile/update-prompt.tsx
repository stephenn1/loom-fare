import { db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { FormEvent, useState } from "react";
import { User } from "@/store/slices/user.slice";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";

interface UpdatePromptProps {
  user: User | { [field: string]: any };
  refresh: () => void;
}

export default function UpdatePrompt({ user, refresh }: UpdatePromptProps) {
  const [isUpadtingPrompt, setIsUpadtingPrompt] = useState(false);

  const handleUpdatePrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsUpadtingPrompt(true);
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const message = formData.get("message") as string;

    await setDoc(doc(db, "users", user.email), {
      ...user,
      prompt: {
        title,
        message,
        seen: false,
      },
    }).catch(() => {});

    setIsUpadtingPrompt(false);
    refresh();
  };

  return (
    <div className="content-start h-full grid gap-2">
      <label className="text-sm font-semibold text-gray-400 grid grid-flow-col w-max items-center gap-3">
        <MdOutlineSystemUpdateAlt className="text-xl" />
        Update Prompt
      </label>

      <form onSubmit={handleUpdatePrompt} className="grid gap-5">
        <div className="grid gap-3">
          <input
            id={"title"}
            name={"title"}
            type={"text"}
            placeholder={"Title"}
            defaultValue={user?.prompt?.title}
            className="outline-none w-full bg-white border border-gray-300 rounded-lg px-5 py-3"
          />

          <textarea
            id={"message"}
            name={"message"}
            placeholder={"message..."}
            defaultValue={user?.prompt?.message}
            className="outline-none w-full bg-white border border-gray-300 rounded-lg px-5 py-3 h-40"
          />
        </div>
        <button
          disabled={isUpadtingPrompt}
          className={`text-sm bg-primary text-white px-y py-3 w-40 rounded-lg font-semibold grid place-content-center justify-self-end ${
            isUpadtingPrompt && "opacity-60"
          }`}
        >
          {isUpadtingPrompt ? (
            <span className="block w-4 h-4 rounded-full border border-white border-b-transparent animate-spin"></span>
          ) : (
            "Update Prompt"
          )}
        </button>
      </form>
    </div>
  );
}

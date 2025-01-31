"use client";

import { db } from "@/config/firebase";
import { RootState } from "@/store";
import { setUser } from "@/store/slices/user.slice";
import { doc, setDoc } from "firebase/firestore";
import React, { FormEvent, useState } from "react";
import { BsFillSaveFill } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

interface DetailsItemProps {
  editable?: boolean;
  id: string;
  label?: string;
  placeholder: string;
  type: string;
  value: string | number;
  icon: React.ReactNode;
}

export default function DetailsItem({
  editable,
  id,
  placeholder,
  type,
  value,
  icon,
}: DetailsItemProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData(e.currentTarget);
    const newValue = data.get(id);

    await setDoc(doc(db, "users", user.email), {
      ...user,
      [id]: newValue,
    }).then(() => {
      dispatch(
        setUser({
          ...user,
          [id]: newValue,
        })
      );
      setIsLoading(false);
      setIsEdit(false);
    });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="grid gap-5 py-3 grid-cols-[auto_1fr] px-5 bg-gray-100 rounded-lg items-baseline"
    >
      {/* <label htmlFor={id} className={`text-primary`}>
        {label}
      </label> */}
      <span className="text-primary text-xl">{icon}</span>
      {!editable && <p>{value}</p>}
      {editable && (
        <div className="grid grid-cols-[1fr_auto] rounded-lg overflow-hidden">
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            defaultValue={value ? value : ""}
            readOnly={!editable || !isEdit}
            className="outline-none bg-transparent profile-input"
          />

          {isEdit ? (
            isLoading ? (
              <div className="bg-[linear-gradient(340deg,_rgb(212_212_212),_transparent)] px-5 grid items-center justify-center">
                <span className="block relative w-5 h-5 border-2 border-neutral-400 rounded-full border-r-transparent border-b-transparent animate-spin"></span>
              </div>
            ) : (
              <button
                type="submit"
                className="block relative w-max px-5 hover:bg-[linear-gradient(340deg,_rgb(212_212_212),_transparent)] transition-all after:transition-all hover:after:h-full after:absolute after:w-[1px] after:h-1/2 after:bg-[#00000030] after:left-0 after:bottom-1/2 after:translate-y-1/2"
              >
                <BsFillSaveFill />
              </button>
            )
          ) : (
            <button
              type="button"
              onClick={() => setIsEdit(true)}
              className="grid items-center relative w-max px-5 hover:bg-[linear-gradient(340deg,_rgb(212_212_212),_transparent)] transition-all after:transition-all hover:after:h-full after:absolute after:w-[1px] after:h-1/2 after:bg-[#00000030] after:left-0 after:bottom-1/2 after:translate-y-1/2"
            >
              <FiEdit3 />
            </button>
          )}
        </div>
      )}
    </form>
  );
}

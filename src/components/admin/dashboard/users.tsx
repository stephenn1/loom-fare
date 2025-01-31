import { db } from "@/config/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);

  const getUsers = async () => {
    const arr: any[] = [];
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setUsers(arr);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      className={`bg-[#FEF6E7] p-5 grid gap-5 items-center rounded-xl overflow-hidden`}
    >
      <FaUsers className="text-[#ffbf46] text-3xl" />

      <div className="grid gap-3">
        <p className="bg-opacity-80 rounded-lg w-maxtext-xs font-semibold text-gray-800">
          Users
        </p>
        <p className="text-3xl sm:text-4xl text-gray-800 font-bold">
          {Number(users.length || 0).toLocaleString("en-US", {
            style: "decimal",
          })}
        </p>
      </div>
    </div>
  );
}

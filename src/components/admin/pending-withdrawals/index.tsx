"use client";

import React, { useLayoutEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/config/firebase";
import Card from "./card";
import { Logo } from "@/ui";
import { TransactionType } from "@/@types";

export default function PendingWithdrawals() {
  const [list, setList] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const arr: any[] = [];
    const q = query(collection(db, "users"), orderBy("email", "asc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      doc.data().transactions.length > 0 &&
        doc
          .data()
          .transactions.filter(
            (e: Record<string, any>) => e.type == TransactionType.Withdrawal
          )
          .forEach((e: Record<string, any>) =>
            arr.push({ user: doc.data(), ...e })
          );
    });
    setList(
      arr.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    );
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full grid place-content-center">
        <span className="animate-pulse">
          <Logo className="w-40 opacity-20" />
        </span>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[auto_1fr] gap-3 p-5 overflow-hidden">
      {/* <CreatePaymentMethod
        refresh={() => {
          getPaymentMethods();
        }}
      /> */}

      <div className="grid overflow-hidden">
        {isLoading ? (
          <div className="grid place-content-center">
            <span className="block w-16 h-16 rounded-full border-2 border-gray-300 border-b-transparent animate-spin"></span>
          </div>
        ) : (
          <div className="grid gap-5 content-start overflow-y-scroll custom-scroll-bar">
            {list.map((item, index) => (
              <Card
                key={index}
                amount={item.amount}
                user={item.user}
                id={item.id}
                type={item.type}
                date={item.date}
                status={item.status}
                refresh={() => getUsers()}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Card from "./card";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Logo } from "@/ui";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const arr: any[] = [];
    const q = query(collection(db, "users"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setUsers(arr);
    setIsLoading(false);
  };

  useEffect(() => {
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
    <div className="p-5 grid gap-5 content-start overflow-y-auto custom-scroll-bar">
      {users?.map((user, index) => (
        <Card
          key={index}
          balance={user.balance}
          email={user.email}
          firstName={user.firstName}
          lastName={user.lastName}
          timestamp={user.timestamp}
        />
      ))}
    </div>
  );
}

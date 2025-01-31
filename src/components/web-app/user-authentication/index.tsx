"use client";

import { PageLoader } from "@/ui";
import { useLayoutEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { doc, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/user.slice";
import { AccountStatus } from "@/@types";

interface UserAuthenticationProps {
  children: React.ReactNode;
}

export default function UserAuthentication({
  children,
}: UserAuthenticationProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState(false);

  const handleCheckUserAuth = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const email = user.email || "";

        const docRef = doc(db, "users", email);

        onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            console.log(doc.data().status);
            if (doc.data().status === AccountStatus.Disabled) {
              router.push("/disabled");
            }
            if (doc.data().status === AccountStatus.Maintenance) {
              router.push("/maintenance");
            }
            if (doc.data().status === AccountStatus.Suspended) {
              router.push("/suspended");
            }
            dispatch(setUser(doc.data()));
          } else {
            router.push("/login");
          }
        });

        setIsAuth(true);
      } else {
        router.push("/login");
      }
    });
  };

  useLayoutEffect(() => {
    handleCheckUserAuth();
  }, []);

  return <>{isAuth ? children : <PageLoader />}</>;
}

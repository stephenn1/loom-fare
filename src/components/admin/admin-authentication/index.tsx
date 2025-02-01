"use client";

import { PageLoader } from "@/ui";
import { useLayoutEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAdminUser } from "@/store/slices/admin-users.slice";

interface AdminAuthenticationProps {
  children: React.ReactNode;
}

export default function AdminAuthentication({
  children,
}: AdminAuthenticationProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState(false);

  const handleCheckAdminAuth = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user && user.email === "admin@loomtrust.com") {
        dispatch(
          setAdminUser({
            id: user?.uid,
            email: user?.email,
          })
        );
        setIsAuth(true);
      } else {
        router.push("/admin-login");
      }
    });
  };

  useLayoutEffect(() => {
    handleCheckAdminAuth();
  }, []);

  return <>{isAuth ? children : <PageLoader />}</>;
}

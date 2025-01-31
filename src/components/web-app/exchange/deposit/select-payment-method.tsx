import { db } from "@/config/firebase";
import { Button, Input, Inputs } from "@/ui";
import { encodeData } from "@/utils/codec.util";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { FormEvent, useLayoutEffect, useState } from "react";

export default function SelectPaymentMethod() {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<Record<string, any>>();
  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);

  const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const amount = formData.get("amount") as string;
    const paymentMethod = formData.get("payment-method") as string;
    const paymentNetwork = selectedPaymentMethod?.chainTypes.filter(
      (e: any) => e.title === formData.get("network")
    )[0];

    const encoded = encodeData({ amount, paymentMethod, paymentNetwork });

    router.push(`/finance?active_tab=deposit&step=details&data=${encoded}`);
  };

  const getPaymentMethods = async () => {
    const arr: any[] = [];
    const q = query(
      collection(db, "payment-methods"),
      orderBy("paymentMethodTitle", "asc")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setPaymentMethods(arr);
  };

  useLayoutEffect(() => {
    getPaymentMethods();
  }, []);

  return (
    <form
      onSubmit={handleFormSubmission}
      className="w-full max-w-lg mx-auto grid gap-5 content-center"
    >
      <Input
        type={Inputs.Number}
        name="amount"
        id="amount"
        label="Amount ($)"
        placeholder="Please input the deposit amount."
        required
      />

      <Input
        type={Inputs.Select}
        name="payment-method"
        label="Payment Method"
        placeholder="Select your preferred payment method"
        options={paymentMethods.map((e) => e.paymentMethodTitle)}
        onChange={(e) =>
          setSelectedPaymentMethod(
            paymentMethods.filter((m) => m.paymentMethodTitle === e)[0]
          )
        }
        required
      />

      <Input
        type={Inputs.Select}
        name="network"
        label="Network"
        placeholder="Select your preferred payment network"
        options={selectedPaymentMethod?.chainTypes.map(
          (e: Record<string, any>) => e.title
        )}
        // resetDependencies={[selectedPaymentMethod]}
        required
      />

      {/* <p className="min-h-6 text-red-400 opacity-80 text-sm">{errorMessage}</p> */}

      <Button
        isLoading={false}
        type="submit"
        className="mx-auto w-full py-3 px-20"
      >
        Proceed
      </Button>
    </form>
  );
}

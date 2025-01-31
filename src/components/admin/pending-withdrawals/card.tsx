import { TransactionStatus } from "@/@types";
import { db } from "@/config/firebase";
import { Button, ButtonVariants, Input, Inputs, Modal } from "@/ui";
import { doc, setDoc } from "firebase/firestore";
import React, { FormEvent, useState } from "react";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

interface CardProps {
  amount: number;
  user: Record<string, any>;
  id: string;
  type: string;
  date: number;
  status: TransactionStatus;
  refresh: () => void;
}

export default function Card({
  amount,
  user,
  id,
  type,
  date,
  status,
  refresh,
}: CardProps) {
  const [isUpdateStatus, setIsUpdateStatus] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  console.log(date);

  const handleToggleIsUpdateStatus = () => {
    setIsUpdateStatus(!isUpdateStatus);
  };

  const handleUpdateStatus = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const status = formData.get("status") as string;
    setIsUpdating(true);
    const amount = Number(
      user.transactions.filter((e: any) => e.id === id)[0].amount
    );

    await setDoc(doc(db, "users", user.email), {
      ...user,
      balance:
        status === TransactionStatus.Failed
          ? Number(user.balance || 0) + amount
          : Number(user.balance || 0),
      withdrawal:
        status === TransactionStatus.Failed
          ? Number(user.withdrawal || 0) - amount
          : Number(user.withdrawal || 0),
      transactions: [
        ...user.transactions.map((e: any) =>
          e.id === id ? { ...e, status } : e
        ),
      ],
    }).catch(() => {
      // setErrorMessage(error.message);
    });

    setIsUpdating(false);
    handleToggleIsUpdateStatus();
    refresh();
  };

  return (
    <>
      <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-between bg-secondary p-5">
        <div className="grid gap-2">
          <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
            Transaction ID
          </p>
          <p className="text-sm text-gray-700">#{id.substring(0, 8)}...</p>
        </div>

        <div className="grid gap-2">
          <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
            Type
          </p>
          <div className="grid grid-flow-col items-center w-max gap-1 capitalize">
            {type === "withdrawal" ? (
              <FiArrowUpRight className="text-primary text-xl" />
            ) : (
              <FiArrowDownLeft className="text-primary text-xl" />
            )}
            <p className="text-sm text-gray-700">{type}</p>
          </div>
        </div>

        <div className="grid gap-2">
          <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
            Email
          </p>
          <p className="text-sm text-gray-700 overflow-hidden text-ellipsis">
            {user.email}
          </p>
        </div>

        <div className="grid gap-2">
          <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
            Amount
          </p>
          <p className="text-sm text-gray-700">
            ${" "}
            {Number(amount)?.toLocaleString("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <div className="grid gap-2">
          <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
            Date
          </p>
          <p className="text-sm text-gray-700">{date}</p>
        </div>

        <div className="grid gap-2">
          <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
            Status
          </p>
          <span
            className={`block w-20 lg:w-28 h-max text-center text-xs lg:text-xs border py-1 rounded-lg capitalize ${
              status === TransactionStatus.Successful
                ? "bg-green-500 border-green-500 bg-opacity-10 text-green-500"
                : status === TransactionStatus.Failed
                ? "bg-red-500 border-red-500 bg-opacity-10 text-red-500"
                : "bg-yellow-500 border-yellow-500 bg-opacity-10 text-yellow-500"
            }`}
          >
            {status?.split("-").join(" ")}
          </span>
        </div>

        {status !== TransactionStatus.Successful &&
          status !== TransactionStatus.Failed && (
            <div className="grid gap-2">
              <p className="text-xs font-semibold capitalize text-gray-400 whitespace-nowrap">
                Action
              </p>
              <Button
                onClick={handleToggleIsUpdateStatus}
                className="text-xs font-semibold text-white bg-primary py-2 px-3 rounded-md w-max grid items-center"
              >
                Update Status
              </Button>
            </div>
          )}
      </div>

      <Modal isModal={isUpdateStatus}>
        <div className="grid gap-5">
          <div className="grid grid-flow-col items-center justify-between">
            <p className="font-bold text-center text-lg">
              Update Withdrawal Status
            </p>
          </div>
          <form onSubmit={handleUpdateStatus} className="grid gap-5 sm:p-5">
            <div className="text-center grid gap-1">
              <p>#{id.substring(0, 8)}...</p>
              <p>{user.email}</p>
              <p>
                ${" "}
                {Number(amount)?.toLocaleString("en-US", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <Input
              type={Inputs.Select}
              name="status"
              options={Object.values(TransactionStatus)}
              defaultValue={status}
              dropDownPos="top"
            />

            <div className="grid grid-cols-2 gap-5">
              <Button
                onClick={handleToggleIsUpdateStatus}
                type="button"
                variant={ButtonVariants.PrimaryOutlined}
                className="mt-5"
              >
                Cancel
              </Button>
              <Button
                isLoading={isUpdating}
                disabled={isUpdating}
                variant={ButtonVariants.PrimaryFilled}
                className="mt-5"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

import { TransactionStatus } from "@/@types";
import { Transaction } from "@/store/slices/user.slice";
import React from "react";

export default function TransactionItem({
  amount,
  type,
  date,
  id,
  source,
  status,
}: Transaction) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-5 justify-between bg-secondary p-5 border border-gray-300 rounded-md">
      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
          Transaction ID
        </p>
        <p className="text-sm text-gray-900">#{id.substring(0, 8)}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
          Type
        </p>
        <p className="text-sm text-gray-900 capitalize">{type}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
          Amount
        </p>
        <p className="text-sm text-gray-900">
          ${" "}
          {amount?.toLocaleString("en-US", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
          Source
        </p>
        <p className="text-sm text-gray-900">{source}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
          Date
        </p>
        <p className="text-sm text-gray-900">{date}</p>
      </div>

      <div className="grid gap-2">
        <p className="text-xs font-semibold capitalize text-gray-500 whitespace-nowrap">
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
    </div>
  );
}

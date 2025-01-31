import { Button, ButtonVariants } from "@/ui";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

interface ProcessingWithdrawalProps {
  toggleProcessingWithdrawal: () => void;
}

export default function ProcessingWithdrawal({
  toggleProcessingWithdrawal,
}: ProcessingWithdrawalProps) {
  return (
    <div className="w-full max-w-3xl grid content-center mx-auto">
      <div className="bg-secondary px-5 py-10 grid gap-5 rounded-xl">
        <FaCheckCircle className="mx-auto text-5xl text-green-500" />

        <div className="grid text-center gap-3 content-start">
          <p className="text-xl sm:text-2xl font-bold text-gray-600">
            Processing Withdrawal
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Your withdrawal request is currently being processed. Please allow
            some time for the transaction to complete. You will receive a
            confirmation email once the withdrawal has been successfully
            processed. Thank you for your patience.
          </p>
        </div>
      </div>

      <Link href={"/dashboard"} className="grid mt-10">
        <Button
          onClick={toggleProcessingWithdrawal}
          variant={ButtonVariants.PrimaryFilled}
          className="mx-auto py-3 w-full max-w-sm"
        >
          Return To Dashboard
        </Button>
      </Link>
    </div>
  );
}

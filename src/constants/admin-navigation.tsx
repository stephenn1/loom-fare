import { FaUsers } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { RiDashboardFill } from "react-icons/ri";

export const ADMIN_NAVIGATION = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: <RiDashboardFill />,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: <FaUsers />,
  },
  {
    title: "Pending Withdrawals",
    url: "/admin/pending-withdrawals",
    icon: <GrTransaction />,
  },
];

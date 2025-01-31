import { BiSupport } from "react-icons/bi";
import { RiBankCardFill, RiCoinsFill, RiDashboardFill } from "react-icons/ri";
import { GiMining } from "react-icons/gi";
import { TbArrowsExchange } from "react-icons/tb";

export const WEB_APP_NAVIGATION = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <RiDashboardFill />,
  },
  {
    title: "Trading",
    url: "/trading",
    icon: <RiCoinsFill />,
  },
  {
    title: "Exchange",
    url: "/exchange",
    icon: <TbArrowsExchange />,
  },
  {
    title: "Mining",
    url: "/mining",
    icon: <GiMining />,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: <RiBankCardFill />,
  },
  {
    title: "Support",
    url: "/support",
    icon: <BiSupport />,
  },
];

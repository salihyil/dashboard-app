

import SidebarMenu from "@/components/sidebar/menu";
import { HomeIcon, LogOutIcon, UserRoundIcon, Wallet2Icon } from "lucide-react";
import LogoSvg from "./logo-svg";

export interface MenuItem {
  icon: any;
  path: string;
  title: string;
}

export const menu: MenuItem[] = [
  {
    icon: <HomeIcon />,
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    icon: <Wallet2Icon />,
    path: "/wallet",
    title: "Wallet",
  },
  {
    icon: <UserRoundIcon />,
    path: "/user",
    title: "User",
  },
  {
    icon: <LogOutIcon />,
    path: "/logout",
    title: "Logout",
  },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col min-h-screen py-6 px-6 overflow-hidden w-[250px] border-r">
      <div className="mb-4">
        <div className="flex items-center justify-center w-full gap-3 px-2 py-2 transition shadow-sm cursor-pointer border rounded-xl hover:bg-blue-50">
          <LogoSvg />
        </div>
      </div>
      <div className="flex-1">
        <SidebarMenu menu={menu} />
      </div>
    </div>
  );
}

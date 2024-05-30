"use client";

import { MenuItem } from "@/components/sidebar";
import { useAppContext } from "@/context";
import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarMenu({ menu = [] }: Readonly<{ menu: MenuItem[] }>) {
  const pathname = usePathname();
  const router = useRouter();
  const { setUser } = useAppContext();

  const handleLogout = () => {
    deleteCookie("token");
    setUser(undefined);
    router.refresh();
  };

  return (
    <div className="grid w-full gap-4">
      {menu.map((item: MenuItem, index: number) => (
        <Link
          onClick={item.path === "/logout" ? handleLogout : undefined}
          key={index}
          href={item.path}
          className={`flex items-center justify-start px-3 py-1 rounded-lg gap-2 hover:bg-blue-50 
          ${pathname === item.path ? "bg-blue-50 text-blue-700" : ""} 
          transition w-full`}>
          {item.icon}
          {item.title}
        </Link>
      ))}
    </div>
  );
}

"use client";
import Link from "next/link";
import { MENUS } from "../(frontend)/const";
import { IMenu } from "../types";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar absolute pt-2 pb-2 top-10 right-[-60px] z-10 bg-slate-50 rounded-tr-md rounded-br-md">
      <ul>
        {MENUS.map((menu: IMenu) => (
          <li
            key={menu.id}
            className={pathname == `${menu.url}` ? "active" : ""}
          >
            <Link
              href={menu.url}
              className="relative py-4 px-5 flex items-center justify-center text-xl text-center"
            >
              <span className="nav-item-text text-black transition ease-in-out duration-300 left-[100%] nav-item-text absolute py-3 pl-2 pr-4 text-[16px] bg-slate-50 rounded-tr-md rounded-br-md">
                {menu.label}
              </span>
              <span className="nav-item-icon text-black">
                <menu.icon />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

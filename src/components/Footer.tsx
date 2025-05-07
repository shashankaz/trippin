"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Search, Plus, Heart, User } from "lucide-react";

const Footer = () => {
  const location = usePathname();

  return (
    <div className="bg-white dark:bg-[#1D1F24] px-2 py-3 fixed bottom-0 left-0 right-0 w-full flex items-center justify-evenly z-50">
      <Link href="/home">
        <button
          className={`size-10 grid place-content-center rounded-full ${
            location === "/home"
              ? "bg-[#3643FB]/30 dark:bg-[#D1F462]/20 text-[#303DDF] dark:text-[#D3F462]"
              : "text-[#676D75]"
          }`}
        >
          <House className="size-5" />
        </button>
      </Link>
      <Link href="/search">
        <button
          className={`size-10 grid place-content-center rounded-full ${
            location === "/search"
              ? "bg-[#3643FB]/30 dark:bg-[#D1F462]/20 text-[#303DDF] dark:text-[#D3F462]"
              : "text-[#676D75]"
          }`}
        >
          <Search className="size-5" />
        </button>
      </Link>
      <Link href="/create">
        <button
          className={`size-10 grid place-content-center rounded-full text-[#303DDF] dark:text-[#D3F462] ${
            location === "/create" ? "bg-[#3643FB]/30 dark:bg-[#D1F462]/20" : ""
          }`}
        >
          <Plus className="size-7" />
        </button>
      </Link>
      <Link href="/favorites">
        <button
          className={`size-10 grid place-content-center rounded-full ${
            location === "/favorites"
              ? "bg-[#3643FB]/30 dark:bg-[#D1F462]/20 text-[#303DDF] dark:text-[#D3F462]"
              : "text-[#676D75]"
          }`}
        >
          <Heart className="size-5" />
        </button>
      </Link>
      <Link href="/profile">
        <button
          className={`size-10 grid place-content-center rounded-full ${
            location === "/profile"
              ? "bg-[#3643FB]/30 dark:bg-[#D1F462]/20 text-[#303DDF] dark:text-[#D3F462]"
              : "text-[#676D75]"
          }`}
        >
          <User className="size-5" />
        </button>
      </Link>
    </div>
  );
};

export default Footer;

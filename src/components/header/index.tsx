"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

const Header = () => {
  const { userName } = useUser();

  return (
    <div className=" bg-white py-2 lg:py-4 px-4 shadow-md ">
      <div className=" max-w-[1200px] mx-auto flex items-center gap-2 lg:gap-10 justify-between">
        {/* LOGO */}
        <Link href={"/"}>
          <Image
            src={"/google-keep.png"}
            width={40}
            height={40}
            alt="Logo"
            className="h-8 w-8 lg:h-10 lg:w-10 overflow-hidden"
          />
        </Link>

        <div className="capitalize">Hi👋 {userName}</div>
      </div>
    </div>
  );
};

export default Header;

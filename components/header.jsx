import React from "react";
import Logo from "../public/assets/images/global/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="w-full flex justify-center items-center pt-8">
        <div className="w-full flex items-center justify-between gap-y-12 max-w-4xl xl:max-w-7xl">
          <Link href={"/"}>
            <div className="w-32 cursor-pointer">
              <Image src={Logo} alt="" priority={true} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

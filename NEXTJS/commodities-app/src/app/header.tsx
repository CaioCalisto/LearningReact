'use client'
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header
      className={"h-12 p-2 md:hidden"}
      style={{ backgroundColor: "var(--BLUE-100)" }}
    >
      <Image
        src={"/acme.svg"}
        alt={"Logo"}
        width={"0"}
        height={"0"}
        style={{ width: "auto", height: "100%" }}
      />
    </header>
  );
}

export default Header;

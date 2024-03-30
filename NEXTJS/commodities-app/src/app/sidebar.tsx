import React from "react";
import Image from "next/image";

function Sidebar() {
  return (
    <div
      className={"flex-col w-24 py-6 px-2 hidden md:block"}
      style={{ backgroundColor: "var(--BLUE-100)" }}
    >
      <Image
        src={"/acme.svg"}
        alt={"Logo"}
        width={"0"}
        height={"0"}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export default Sidebar;

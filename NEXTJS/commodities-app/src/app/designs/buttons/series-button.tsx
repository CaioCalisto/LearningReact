import React from "react";
import Image from "next/image";

type SeriesButtonProps = {
  iconPath: string;
};

function SeriesButton({ iconPath }: SeriesButtonProps) {
  return (
    <div
      className={
        "p-1 border-2 rounded-xl align-middle justify-center justify-items-center"
      }
      style={{ borderColor: "var(--GRAY-30)" }}
    >
      <Image
        src={iconPath}
        alt={"Series Button"}
        width={"0"}
        height={"0"}
        style={{ width: "auto", height: "100%" }}
      />
    </div>
  );
}

export default SeriesButton;

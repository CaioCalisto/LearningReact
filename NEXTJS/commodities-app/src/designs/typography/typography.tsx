import React, { ReactNode } from "react";
import "./typography.css";

type TypographyProps = {
  style: "title" | "body";
  size: "xl" | "l" | "m" | "s" | "xs";
  weight: "bold" | "regular";
  color?: string;
  children: ReactNode;
};

function Typography({ style, size, weight, color, children }: TypographyProps) {
  return (
    <span
      className={`typography ${style} ${size} ${weight}`}
      style={{ color: `${color}` }}
    >
      {children}
    </span>
  );
}

export default Typography;

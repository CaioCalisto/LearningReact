import React, { ReactNode } from "react";
import './typography.css'

type TypographyProps = {
  style: "title" | "body";
  size: "xl" | "l" | "m" | "s" | "xs";
  weight: "bold" | "regular";
  children: ReactNode;
};

function Typography({ style, size, weight, children }: TypographyProps) {
  return <span className={`typography ${style} ${size} ${weight}`}>{children}</span>;
}

export default Typography;

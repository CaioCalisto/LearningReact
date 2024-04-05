import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function RoundedContainer({ children }: Props) {
  return <div className={"border-2 rounded-md px-4 py-3"}>{children}</div>;
}

export default RoundedContainer;

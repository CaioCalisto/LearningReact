import React, { ReactNode, useState } from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/lib/components/ui/drawer";

function getChevronRight() {
  return (
    <Image
      src={"/chevron-right.svg"}
      alt={"Chevron Right Button"}
      width={"0"}
      height={"0"}
      style={{ width: "100%", height: "auto" }}
    />
  );
}

function getChevronLeft() {
  return (
    <Image
      src={"/chevron-left.svg"}
      alt={"Chevron Left Button"}
      width={"0"}
      height={"0"}
      style={{ width: "100%", height: "auto" }}
    />
  );
}

type Props = {
  children: ReactNode;
};

export default function RightSidePanel({ children }: Props) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <Drawer direction={"right"}>
      <DrawerTrigger asChild>
        <button
          className={"h-6 w-6 border-2 rounded-l-2xl"}
          onClick={() => {
            setAccordionOpen(!accordionOpen);
          }}
        >
          {accordionOpen ? getChevronRight() : getChevronLeft()}
        </button>
      </DrawerTrigger>
        {/*TODO: implement scroll here*/}
      <DrawerContent className={"px-3 py-2 border-2 rounded-t-lg"}>
        {children}
      </DrawerContent>
    </Drawer>
  );
}

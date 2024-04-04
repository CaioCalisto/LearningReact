"use client";
import React from "react";
import Details from "./details";
import { useParams } from "next/navigation";
import { Pill } from "@/designs";

function Page() {
  const { id } = useParams();

  return (
    <div className={"flex flex-col gap-3"}>
      <Details id={id as string} />
      <Pill
        options={[
          { title: "Overview", renderItem: <>1</> },
          { title: "Forecast", renderItem: <>2</> },
        ]}
      />
    </div>
  );
}

export default Page;

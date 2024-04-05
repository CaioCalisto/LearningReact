"use client";
import React from "react";
import Details from "./details";
import { useParams } from "next/navigation";
import { Pill } from "@/designs";
import {ForecastContent} from "@/features/forecast";

function Page() {
  const { id } = useParams();

  return (
    <div className={"flex flex-col gap-3"}>
      <Details id={id as string} />
      <Pill
        options={[
          { title: "Overview", renderItem: <>Overview</> },
          { title: "Forecast", renderItem: <ForecastContent /> },
        ]}
      />
    </div>
  );
}

export default Page;

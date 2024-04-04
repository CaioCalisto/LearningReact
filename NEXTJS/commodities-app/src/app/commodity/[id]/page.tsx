"use client";
import React from "react";
import Details from "./details";
import { useParams } from "next/navigation";

function Page() {
  const { id } = useParams();

  return <Details id={id as string} />;
}

export default Page;

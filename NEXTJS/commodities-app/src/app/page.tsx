"use client";
import { Typography } from "../designs";
import CommodityList from "@/features/commodity-list/commodity-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-6">
      <div className={"flex flex-row self-start"}>
        <Typography style={"title"} size={"m"} weight={"bold"}>
          Commodity List
        </Typography>
      </div>
      <CommodityList />
    </main>
  );
}

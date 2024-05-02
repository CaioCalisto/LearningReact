import React from "react";
import useCommodityList from "./useCommodityList";
import { ColumnDefinitionType, CommonTable, Typography } from "@/designs";
import { Commodity } from "@/types";

const columns: ColumnDefinitionType<Commodity>[] = [
  {
    attribute: "title",
    header: "Title",
  },
  {
    attribute: "region",
    header: "Region",
  },
  {
    attribute: "category",
    header: "Category",
  },
  {
    attribute: "lastUpdate",
    header: "Last Update",
  },
  {
    attribute: "price",
    header: "Price",
  },
  {
    attribute: "metric",
    header: "Metric",
  },
  {
    attribute: "code",
    header: "Code",
  },
];

function CommodityList() {
  const { data, isLoading } = useCommodityList();

  if (isLoading) {
    return (
      <Typography style={"title"} size={"s"} weight={"bold"}>
        Loading
      </Typography>
    );
  }

  console.log(data);
  return <CommonTable data={data} columns={columns} />;
}

export default CommodityList;

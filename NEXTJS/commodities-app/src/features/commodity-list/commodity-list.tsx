import React from "react";
import useCommodityList from "./useCommodityList";

function CommodityList() {
  const { data, isLoading } = useCommodityList();

  console.log(data);
  return <div></div>;
}

export default CommodityList;

import React from "react";
import useDetail from "@/features/forecast/summary/useDetail";
import { TextArea, Typography } from "@/designs";

type Props = {
  commodityId: string;
};

function Detail({ commodityId }: Props) {
  const { summary } = useDetail(commodityId);

  return (
    <div className={"flex flex-col gap-2"}>
      <Typography style={"body"} size={"xl"} weight={"bold"}>
        Forecast Summary
      </Typography>
      <TextArea style={"body"} size={"s"} weight={"regular"} maxLength={400}>
        {summary}
      </TextArea>
    </div>
  );
}

export default Detail;

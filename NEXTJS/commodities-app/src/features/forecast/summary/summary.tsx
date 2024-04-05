import React from "react";

type Props = {
  commodityId: string;
};

function Summary({ commodityId }: Props) {
  return <div>Summary for {commodityId}</div>;
}

export default Summary;

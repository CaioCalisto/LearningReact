import React from "react";
import Chart from "./chart";
import { Bar, RoundedContainer, TextArea, Typography } from "@/designs";
import KeyData from "@/features/forecast/summary/key-data";
import Pyramid from "@/features/forecast/summary/pyramid";

type Props = {
  commodityId: string;
};

function Summary({ commodityId }: Props) {
  return (
    <>
      <Chart commodityId={commodityId} />
      <div className={"md:hidden py-2"}>
        <RoundedContainer>
          <Bar
            options={[
              {
                title: "Key Data",
                renderItem: <KeyData commodityId={commodityId} />,
              },
              {
                title: "Targets",
                renderItem: <>Targets Content</>,
              },
            ]}
          />
        </RoundedContainer>
      </div>
      <br />
      <hr />
      <div className={"grid md:grid-cols-2 gap-8"}>
        <div className={"flex flex-col gap-2"}>
          <Typography style={"body"} size={"xl"} weight={"bold"}>
            Forecast Summary
          </Typography>
          <TextArea
            style={"body"}
            size={"s"}
            weight={"regular"}
            maxLength={400}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            aspernatur, beatae dolor dolorem ducimus eius enim esse illo illum
            in, iure iusto labore libero molestiae omnis quod, reprehenderit sit
            tempora totam voluptates! Ab, accusantium alias asperiores assumenda
            autem blanditiis, ipsum minus, mollitia nihil odit repellat sequi
            soluta tempora? Ab accusamus ad adipisci alias architecto autem
            dignissimos, eaque esse eum ex exercitationem expedita harum illo
            impedit, ipsum magnam minima modi molestias mollitia natus
            necessitatibus nisi nobis nulla placeat possimus quam quia, quis
            reprehenderit vitae voluptatum. Alias consequuntur enim eos
            explicabo itaque laboriosam molestiae non quam quibusdam ratione,
            suscipit temporibus, tenetur! Architecto?
          </TextArea>
        </div>
        <Pyramid />
      </div>
    </>
  );
}

export default Summary;

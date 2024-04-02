import {Product} from "@/app/types";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
   return Response.json(getDummyDate(params.id as string));
}

function getDummyDate(id: string): Product[] {
  return [{
    title: "LDPE cont fob US",
    description:
      "Low density polyethylene (LDPE) | large volume transactions | contract price; free on board | USA",
    code: id,
    currentPrice: 0.7418,
    currency: "GBP/lbs",
    frequency: "Weekly",
    lastUpdate: "2023-21-11",
    comparison: "36,09%",
    lastPrice: 0.7266,
  }];
}

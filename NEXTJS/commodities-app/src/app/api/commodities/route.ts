import { Commodity } from "@/types";

export async function GET(request: Request) {
  return Response.json(getDummyDate());
}

function getDummyDate(): Commodity[] {
  return [
    {
      title: "Cheese imports NZ",
      region: "USA",
      category: "Dairy",
      lastUpdate: "05/04/2023",
      price: 22.18,
      metric: "USD/Kg",
      code: "MIL4",
    },
    {
      title: "Cheese Brie 40% fat exp FR",
      region: "USA",
      category: "Dairy",
      lastUpdate: "11/04/2023",
      price: 1.23,
      metric: "USD/lb",
      code: "BHSB",
    },
    {
      title: "Sheepskin ITB USA",
      region: "UK",
      category: "Meat and Poultry",
      lastUpdate: "25/03/2023",
      price: 0.45,
      metric: "USD/10g",
      code: "IAUS",
    },
  ];
}

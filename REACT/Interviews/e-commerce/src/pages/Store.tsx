import React from "react";
import { container } from "../DI";
import { Api } from "../hooks/Api";

function Store() {
  const api: Api = container.resolve<Api>("api");
  const { data } = api.getProducts();

  return (
    <>
      {data.data.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <h1>{product.price}</h1>
          <img src={product.imgUrl} alt={product.name} />
        </div>
      ))}
    </>
  );
}

export default Store;

import { container } from "../DI";
import { Api } from "../hooks/Api";

function Store() {
  const api: Api = container.resolve<Api>("api");
  const { isLoading, isSuccess, isFetching, isError, data, error, refetch } =
    api.getProducts();

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  if (isError){
    return <h1>{error.message}</h1>
  }

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

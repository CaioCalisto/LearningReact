import { Card, Divider, Grid, Paper, Stack } from "@mui/material";
import { container } from "../DI";
import { Api } from "../hooks/Api";

function Store() {
  const api: Api = container.resolve<Api>("api");
  const { isLoading, isSuccess, isFetching, isError, data, error, refetch } =
    api.getProducts();

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Grid container spacing={1}>
      {data.data.map((product) => (
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1} key={product.id} style={{ width: "130px"}}>
          <Card elevation={3}  style={{ justifyContent: "center", width: "130px" }}>
            <img
              src={product.imgUrl}
              alt={product.name}
              style={{
                width: "130px",
                objectFit: "cover",
              }}
            />
            <h3>{product.name}</h3>
            <Divider />
            <h4>R$ {product.price}</h4>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Store;

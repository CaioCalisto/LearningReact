import { Grid, Paper, Stack } from "@mui/material";
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
    <Grid container spacing={2}>
      {data.data.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
          <Paper elevation={3} key={product.id}>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <img
              src={product.imgUrl}
              alt={product.name}
              style={{
                width: "125px",
                height: "75px",
                objectFit: "cover",
              }}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Store;

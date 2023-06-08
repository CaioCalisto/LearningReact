
export type ProductDetail = {
  imgUrl: string
  name: string,
  price: number,
  description: string
}

function Detail({data} : {data: ProductDetail}) {
  return (
    <>
      <img data-testid='product_image' src={data.imgUrl} alt="" />
      <h1 data-testid='product_name'>{data.name}</h1>
      <h1 data-testid='product_price'>R$ {data.price}</h1>
      <h1 data-testid='product_description'>{data.description}</h1>
      <button data-testid='add-to-cart-button'>Add to cart</button>
    </>
  )
}

export default Detail
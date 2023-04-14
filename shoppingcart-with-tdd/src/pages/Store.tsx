import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import { container } from '../DI'
import { CartApi } from '../infrastructure/api/CartApi'
import { Product } from '../infrastructure/api/Product'

export const Store = () => {
  const api: CartApi = container.resolve<CartApi>('api')
  
  const {data, error } = api.fetch<Product[], any>(
    (onSuccess) => console.log(JSON.stringify(onSuccess)),
    (onError) => console.log(JSON.stringify(onError))
  )
  
  return (
    <div title="Store page">
      <Row md={2} xs={1} lg={3} className="g-3">
        {data?.map(item =>(
          <Col key={item.id} data-testid='item'>
            <StoreItem id={item.id} name={item.name} imgUrl={item.imgUrl} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

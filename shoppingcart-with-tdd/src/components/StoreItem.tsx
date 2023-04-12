import { Card } from "react-bootstrap"
import { useShoppingCartContext } from "../contexts/ShoppingCart"

type StoreItemProps = {
  id: number,
  name: string,
  imgUrl: string
}

export function StoreItem({id, name, imgUrl} : StoreItemProps){
  const { getItemQuantity } = useShoppingCartContext()
  
  return (
    <Card className="h-100">
      <Card.Img 
        variant="top" 
        src={imgUrl} 
        height="200px"
        style={{
          objectFit: "cover"
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
        </Card.Title>
        <div className="mt-auto">
          {getItemQuantity(id) == 0 ?(
            <button data-testid='btn_add'></button>
          ) : (
            <div>oi</div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
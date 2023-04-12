import { Button, Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../contexts/ShoppingCart"

type CartItemProps = {
  id: number
  name: string
  price: number
  quantity: number
  imgUrl: string
}

export function CartItem({ id, name, price, quantity, imgUrl} : CartItemProps){
  const { removeItem } = useShoppingCartContext()

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img 
        src={imgUrl} 
        style={{ 
          width: "125px", 
          height: "75px", 
          objectFit: "cover" 
        }} 
      />
      <div className="me-auto">
        <div>
          {name}{" "} 
          {quantity > 1 &&(
            <span className="text-muted" style={{ fontSize: ".65rem"}}>
              {quantity}x
            </span>
          )} 
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem"}}>
          $ {price}
        </div>
      </div>
      <div>
        $ {(price * quantity)}
      </div>
      <Button 
        variant="outline-danger" 
        size="sm" 
        data-testid='btn_remove'
        onClick={() => removeItem(id)}
      >
          &times;
      </Button>
    </Stack>
  )
}
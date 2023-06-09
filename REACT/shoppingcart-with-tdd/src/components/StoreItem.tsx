import { Button, Card } from 'react-bootstrap'
import { useShoppingCartContext } from '../contexts/ShoppingCart'
import { useTranslation } from 'react-i18next'

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, addItem, removeItem } = useShoppingCartContext()
  const { t } = useTranslation()

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{
          objectFit: 'cover',
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">$ {price}</span>
        </Card.Title>
        <div className="mt-auto">
          {getItemQuantity(id) == 0 ? (
            <Button
              className="w-100"
              data-testid="btn_add"
              onClick={() => addItem(id)}
            >
              {t('item.addToCart')}
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '.5rem' }}
            >
              <Button
                variant="danger"
                size="sm"
                data-testid="btn_remove"
                onClick={() => removeItem(id)}
              >
                {t('item.remove')}
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

import { Card } from "react-bootstrap"

type StoreItemProps = {
  imgUrl: string
}

export function StoreItem({imgUrl} : StoreItemProps){
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
    </Card>
  )
}
import { Col, Container, Row } from "react-bootstrap"


export const CustomGrid = () => {
  return (
    <Container>
      <SizeDescription />
      <Row>
        <Col>| 1 of 1</Col>
      </Row>
      <Row>
        <Col>| 1 of 2</Col>
        <Col>| 2 of 2</Col>
      </Row>
      <Row>
        <Col>| 1 of 3</Col>
        <Col>| 2 of 3</Col>
        <Col>| 3 of 3</Col>
      </Row>
      <Row>
        <Col>| 1 of 3</Col>
        <Col xs={6}>| 2 of 3 (wider)</Col>
        <Col>| 3 of 3</Col>
      </Row>
      <Row>
        <Col>| 1 of 3</Col>
        <Col xs={5}>| 2 of 3 (wider)</Col>
        <Col>| 3 of 3</Col>
      </Row>
      <br />
      <Row className="justify-content-md-center">
        <Col xs lg="2">| 1 of 3</Col>
        <Col md="auto">| Variable width content</Col>
        <Col xs lg="2">| 3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">| 3 of 3</Col>
      </Row>
      <br />
      <br />
      <h4>Responsive grids</h4>
      <Row>
        <Col sm={8}>| sm=8</Col>
        <Col sm={4}>| sm=4</Col>
      </Row>
      <Row>
        <Col sm>| sm=true</Col>
        <Col sm>| sm=true</Col>
        <Col sm>| sm=true</Col>
      </Row>
      <br />
      <br />
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>| xs=12 md=8</Col>
        <Col xs={6} md={4}>| xs=6 md=4</Col>
      </Row>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={6} md={4}>| xs=6 md=4</Col>
        <Col xs={6} md={4}>| xs=6 md=4</Col>
        <Col xs={6} md={4}>| xs=6 md=4</Col>
      </Row>
      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6}>| xs=6</Col>
        <Col xs={6}>| xs=6</Col>
      </Row>
      <br />
      <Row>
        <Col md={4}>md=4</Col>
        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
      </Row>
      <br />
      <Row xs={2} md={4} lg={6}>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row xs={1} md={2} lg={3} xl={4}> 
        <Col>| 1 of 4</Col>
        <Col>| 2 of 4</Col>
        <Col>| 3 of 4</Col>
        <Col>| 4 of 4</Col>
      </Row>
      <Row xs="auto">
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  )
}

function SizeDescription(){
  return(
    <Container>
      <Row>
        <Col>Name</Col>
        <Col>Description</Col>
      </Row>
      <Row>
        <Col>xxl</Col>
        <Col>extra large devices (≥1400px)</Col>
      </Row>
      <Row>
        <Col>xl</Col>
        <Col>extra large devices (≥1200px)</Col>
      </Row>
      <Row>
        <Col>lg</Col>
        <Col>large devices (≥992px)</Col>
      </Row>
      <Row>
        <Col>md</Col>
        <Col>medium devices (≥768px)</Col>
      </Row>
      <Row>
        <Col>sm</Col>
        <Col>small devices (≥576px)</Col>
      </Row>
      <Row>
        <Col>xs</Col>
        <Col>extra small devices (less than 576px)</Col>
      </Row>
    </Container>
  )
}
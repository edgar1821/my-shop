import { useParams } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import Layout from '../../Layout'
import { Container } from 'react-bootstrap'
import useFetchData from '../../hooks/useFetchData'
import { PRODUCT_DETAIL } from '../../constants/endpoints'
import * as Status from '../../constants/status'

function Detail() {
  const { id = '' } = useParams()
  const url = `${PRODUCT_DETAIL}${id}`
  // const response = useFetchData(url)
  // const response = {
  //   status: 1,
  //   payload: {
  //     id: 3,
  //     title: 'Mens Cotton Jacket',
  //     price: 55.99,
  //     description:
  //       'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
  //     category: "men's clothing",
  //     image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  //     rating: {
  //       rate: 4.7,
  //       count: 500,
  //     },
  //   },
  // }
  const { status = Status.PENDING, payload = {} } = useFetchData(url)
  const {
    title = '',
    price = 0,
    description = '',
    image = '',
    category,
  } = payload
  return (
    <Layout>
      <Container>
        {status === Status.PENDING && <div>Cargando ...</div>}
        {status === Status.ERROR && <div>Ocurrio un error</div>}
        {status === Status.SUCCESS && (
          <Row>
            <Col xs={12} md={6}>
              <img
                src={image}
                alt={title}
                style={{ width: '100%', height: '80%' }}
              />
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col md={2}>Producto:</Col>
                <Col md={10}>{title}</Col>
              </Row>
              <Row>
                <Col md={2}>Descripcion:</Col>
                <Col md={10}>{description}</Col>
              </Row>
              <Row>
                <Col md={2}>Categoria:</Col>
                <Col md={10}>{category}</Col>
              </Row>
              <Row>
                <Col md={2}>Precio:</Col>
                <Col md={10}>S/{price}</Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Button variant="primary">Agregar al carrito</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </Layout>
  )
}

export default Detail

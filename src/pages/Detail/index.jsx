import { useParams } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import Layout from '../../Layout'
import { Container } from 'react-bootstrap'
import useFetchData from '../../hooks/useFetchData'
import { PRODUCT_DETAIL } from '../../constants/endpoints'
import * as Status from '../../constants/status'
import { useReducer } from 'react'
import reducer from '../../context/reducer'
import { initialState } from '../../context'

function Detail() {
  const { id = '' } = useParams()
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = `${PRODUCT_DETAIL}${id}`
  const { status = Status.PENDING, payload = {} } = useFetchData(url)
  const {
    title = '',
    price = 0,
    description = '',
    image = '',
    category,
  } = payload

  function handleClick(){
    const { listaProductos = [] } = state
    listaProductos.push(payload)
    dispatch({ type: 'ADD_PRODUCT', payload: listaProductos })
  }
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
                  <Button variant="primary" onClick={handleClick}>Agregar al carrito</Button>
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

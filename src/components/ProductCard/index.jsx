import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PRODUCT_DETAIL } from '../../constants/urls'
import './styles.css'

const classes = {
  link: 'link-product-card',
}
function ProductCard(props) {
  const { id = 0, title = '', price = 0, image = '' } = props
  const PRODUCT_DETAIL_URL = `${PRODUCT_DETAIL}${id}`
  function handleClickAdd() {
    console.log(props)
  }
  return (
    <Card
      style={{ width: '18rem', marginBottom: 10, marginRight: 10 }}
    >
      <Link to={PRODUCT_DETAIL_URL} className={classes.link}>
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <Link to={PRODUCT_DETAIL_URL} className={classes.link}>
          <Card.Title>{title}</Card.Title>
        </Link>

        <Card.Text>{`precio S/${price}`}</Card.Text>
        <Button variant="primary" onClick={handleClickAdd}>
          Agregar{' '}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard

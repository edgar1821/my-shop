import Layout from '../../Layout'
import { Container } from 'react-bootstrap'
import ProductCard from '../../components/ProductCard'
import useFetchData from '../../hooks/useFetchData'
import { PRODUCTS_LIST } from '../../constants/endpoints'
import * as Status from '../../constants/status'
function Home() {
  const { status = Status.PENDING, payload = [] } = useFetchData(PRODUCTS_LIST)
  // const item = {
  //   id: 1,
  //   title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //   price: 109.95,
  //   description:
  //     'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  //   category: "men's clothing",
  //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //   rating: {
  //     rate: 3.9,
  //     count: 120,
  //   },
  // }
  return (
    <Layout>
      <Container>
        {status === Status.PENDING && <div>Cargando ...</div>}
        {status === Status.ERROR && <div>Ocurrio un error</div>}
        {status === Status.SUCCESS && payload.map(item=>(<ProductCard {...item} key={item.id} />))}
        
      </Container>

      {/* <pre>{JSON.stringify(payload, null, 2)}</pre> */}
    </Layout>
  )
}

export default Home

import { useReducer } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import { Context } from '../context'
import reducer from '../context/reducer'
import { initialState } from '../context'
import StoreName from '../components/StoreName'

function Layout({ children }) {
  // const state = useContext(Context)
  const [state] = useReducer(reducer, initialState)
  const { listaProductos = [] } = state
  const carritoLavel = `Carrito ${listaProductos.length}`
  let total = 0
  listaProductos.forEach((element) => {
    total += element.price
  })
  return (
    <Container>
      <StoreName />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MY SHOP LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown title={carritoLavel} id="collasible-nav-dropdown">
                {listaProductos.length > 0 &&
                  listaProductos.map((item) => (
                    <NavDropdown.Item href="#action/3.1" key={item.id}>
                      {`${item.title} S/${item.price}`}
                    </NavDropdown.Item>
                  ))}

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  {`Total S/${total}`}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </Container>
  )
}

export default Layout

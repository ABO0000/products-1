import { Dropdown, Navbar, Nav, Container, Button, DropdownButton } from 'react-bootstrap';
import '/home/user/test-project/client/src/components/Topbar/bootstrap.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './UserStore.js'

const Topbar = () => {
  
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const logo = () => {
    if (Object.keys(user).length > 0) {
      navigate('/products')
    }
    else { navigate('/') }
  }

  const logout = () => {
    if (Object.keys(user).length > 0) {
      dispatch(setUser([]));
      navigate('/')
    }
    else <></>
  }

 
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={logo} style={{ fontWeight: 'bold', fontSize: 25, padding: 10, cursor: "pointer" }} >
          「𝔸𝕔𝕔𝕖𝕤𝕤𝕠𝕣𝕚𝕖𝕤」
        </Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px', maxWidth: '100%' }}>
          {
            Object.keys(user).length > 0
              ? <>
                {
                  !!user.isAdmin
                    ? <>
                      <DropdownButton variant="outline-secondary" id="dropdown-basic" title="Admin" >

                        <Dropdown.Item>
                          <Link to="/users" style={{ padding: 10 }}>Users</Link>
                        </Dropdown.Item>

                        <Dropdown.Item>

                          < Link to="/reviews" style={{ padding: 10 }}>Reviews</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/add-product" style={{ padding: 10 }}>New Product</Link>
                        </Dropdown.Item>

                      </DropdownButton>
                      <Link to="/products" style={{ padding: 10 }} >Products</Link>
                    </>

                    : <Link to="/products" style={{ padding: 10 }}>Products</Link>

                }
                <Nav>
                 
                </Nav>
              </>

              : <></>
          }
        </Nav>
        {Object.keys(user).length > 0
          ? <Nav><Button variant="outline-secondary" onClick={logout} >Logout</Button></Nav>
          : <></>}
      </Container>
    </Navbar>
  )
}

export default Topbar


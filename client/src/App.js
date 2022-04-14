
import Topbar from './Topbar';
import Home from './Home';
import Products from './Products';
import Users from './Users';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';
import ProductDetails from './ProductDetails';
import Review from './Review';
import { useSelector } from 'react-redux';
import ChangePassword from './ChangePassword';


function App() {
  const { user } = useSelector((state) => state.user)
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          {Object.keys(user).length > 0
            ? <>
              {!!user.isAdmin
                ? <>
                  <Route exact path="/" element={<Products />} />
                  <Route exact path='/users' element={<Users />} />
                  <Route exact path='/reviews' element={<Review />} />
                  <Route exact path='/products' element={<Products />} />
                  <Route exact path='/add-product' element={<AddProduct />} />
                  <Route exact path='/products/:id' element={<ProductDetails />} />

                </>
                : <>
                  <Route exact path="/" element={<Products />} />
                  <Route exact path='/products' element={<Products />} />
                  <Route exact path='/products/:id' element={<ProductDetails />} />
                </>
              }
            </>
            : <>
              <Route exact path="/" element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path="/change-password" element={<ChangePassword/>} />
            </>}

        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App

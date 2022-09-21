import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import Cart from './components/routes/Cart'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'
import { useEffect } from 'react'
import './footer.css'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
      <footer>
        <div class="footer1">
          <div class="footer2">
            <h3 >Contact Us:</h3>
          </div>
          <ol class="footer3">
            <a href="mailto:geomenacontact@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/geovanni-mena-651b05240/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Geovamena" target="_blank"><i class="fa-brands fa-github"></i></a>
          </ol>
        </div>
      </footer>
    </div>
  )
}

export default App

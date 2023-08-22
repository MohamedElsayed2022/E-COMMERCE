import './App.css';
import { Navbar } from './components/navbar/Navbar';
import {Products} from './pages/products/Products'
import {Product} from './pages/product/Product'
import {NotFound} from './pages/Not-Found/Not-found'
import {Cart} from './pages/cart/Cart'
import {Routes ,Route , useNavigate , createSearchParams} from 'react-router-dom'
import { useCart } from './context/Cart';
import User from '../src/pages/users/User';
import Register from './pages/register/Register';
import Login from './pages/register/Login';
function App() {
  const navigate = useNavigate()
  const { cartItemCount } = useCart()
  const onSearch = (searchQuery)=>{
    navigate(`/?${createSearchParams({q: searchQuery})}`)
  }
  return (
    <>
    <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />
    <Routes>
      <Route path='/' element={<Products />}/>
      <Route path='/product/:productId' element={<Product />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/user' element={<User />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>

      <Route path='*' element={<NotFound />}/>

    </Routes>
    </>
  );
}

export default App;

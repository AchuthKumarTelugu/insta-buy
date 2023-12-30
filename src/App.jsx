
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from './assets/instabuy-logo.png' 
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx';
import Checkout from './components/Checkout.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import ProductsGallery from './components/ProductsGallery.jsx';
import Cart from './components/Cart.jsx';
import {Routes,Route,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react';
import { Badge } from 'react-bootstrap';

function App() {
  const navigate=useNavigate()
  let [user,setUser]=useState()
  useEffect(()=>{
    let userEmail=localStorage.getItem('userEmail')
    if(userEmail){
      setUser(userEmail)
    }
  },[])
  let [cartItems,setCartItems]=useState({})
  let handleItemsToCart = (item) => {
    setCartItems({...cartItems,...item})
  }
  return (
      <div className='App'>
        <Navbar className="instaBuy-navbar"  style={{padding:"1rem 3rem"}}>
      
        <Navbar.Brand href="/" className="navbar-brand">
          <img src={Logo} alt='brokenImage' width='40' height='40' style={{marginRight:"0.5rem"}}/>
           <h3 onClick={()=>navigate('/')}>InstaBuy!</h3>
          </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {user && <Button onClick={()=> navigate('/Cart')}>Cart &nbsp; {Object.keys(cartItems).length >0 && <Badge bg="success">{Object.keys(cartItems).length}</Badge>} </Button>}
         <Button style={{margin:'0 1rem'}} onClick={()=>{
            navigate('/login')
         
          }}>{user ? 'Log out':'Log in'}</Button>
        </Navbar.Collapse>
      
    </Navbar>
    <Routes>
        <Route path='/' element={<Home user={user}/>} />
        
        <Route path='/signup' element={<Signup setUser={setUser}/>} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/productsGallery' element={<ProductsGallery/>} />
        <Route path='/productDetail' element={<ProductDetails handleItemsToCart={handleItemsToCart} cartItems={cartItems}/>} />
        <Route path='/Cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path='/checkout' element={<Checkout/>} />
    </Routes>
    {/* <Home/>
    <Login/>
    <Signup/> */}
      </div>
      
  )
}

export default App

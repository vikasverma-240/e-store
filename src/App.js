import './App.css';
import Header from './common/header/Header';
import { Route, Routes } from 'react-router-dom';
import Pages from './pages/Pages';
import FlashData from './components/FlashDeals/FlashData';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Footer from './common/footer/Footer';

function App() {
  // step 1: fetch data from database
  const {productItems} = FlashData;

  const [cartItem, setCardItem] = useState([])

  const addToCart = (product)=>{
    const productExit = cartItem.find((item)=> item.id === product.id);

    if(productExit){
      setCardItem(cartItem.map((item)=>
      (item.id ===product.id ? {...productExit, qty:productExit.qty + 1} : item)))
    }
    else{
      setCardItem([...cartItem, {...product, qty:1}]);
    }
  }
  
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <>
    <Header cartItem = {cartItem}/>
    
      <Routes>
        <Route exact path='/' element={<Pages productItems = {productItems}  addToCart={addToCart}/>}></Route>
        <Route exact path='/cart' element={<Cart cartItem = {cartItem}  addToCart={addToCart} decreaseQty={decreaseQty}/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

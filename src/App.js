import './App.css';
import Header from './common/header/Header';
import { Route, Routes } from 'react-router-dom';
import Pages from './pages/Pages';
import FlashData from './components/FlashDeals/FlashData';
import { useState } from 'react';

function App() {
  // step 1: fetch data from database
  const {productItems} = FlashData;

  const [cartItem, setCardItem] = useState([])

  const addToCart = (product)=>{
    const productExit = cartItem.find((item)=> item.id === product.id)

    if(productExit){
      setCardItem(cartItem.map((item)=>(item.id ===product.id ? {...productExit, qty:productExit.qty + 1} : item)))
    }
  }
  return (
    <>
    <Header/>
    
      <Routes>
        <Route exact path='/' element={<Pages productItems = {productItems} />}></Route>
      </Routes>
    </>
  );
}

export default App;

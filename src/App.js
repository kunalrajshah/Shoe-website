import React,{useState} from 'react';
import Input from './Components/Input';
import CartItems from './Components/Cart/CartItems';
import CartContextProvider from './Components/Store/CartContextProvider';


function App() {

  // For cart display
  const [displayCart,setDisplay]=useState(false);
  const displayHandler=()=>{
    setDisplay(true);
  }
  const closeCartHandler=()=>{
    setDisplay(false);
  }
  return (
    <CartContextProvider>
    {displayCart && <CartItems cartClose={closeCartHandler} />}
    <Input cartHandler={displayHandler}/>
   </CartContextProvider>
  );
}

export default App;

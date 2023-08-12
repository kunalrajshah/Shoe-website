import React, { useContext,useState} from "react";
import Modal from "../UI/modal";
import CartContext from "../Store/CartContext";
import Classes from "./Cart.module.css";
import Cls from "./CartItem.module.css";

const CartItems = (props) => {

  const ctxt = useContext(CartContext);

  const[orderMsg,setOrderMsg]=useState(false);

  // For clear Cart
  const clearCart=()=>{
    ctxt.clearItem();
    setOrderMsg(true);
    setTimeout(() => {
      setOrderMsg(false)
    }, 2000);
  }

  const groupItems = (items) => {
    const groupedItems = {};
    items.forEach((item) => {
      if (!groupedItems[item.id]) {
        groupedItems[item.id] = {...item,Quantity:item.Quantity};
      } else {
        groupedItems[item.id].Quantity += item.Quantity;
      }
    });
    // The Object.values() static method returns an array of a given object.
    return Object.values(groupedItems);
  };

  const hasItem=ctxt.items.length > 0;

  // console.log(ctxt.items);
  const cartMaterial = (
    <ul className={Classes["cart-items"]}>
      {groupItems(ctxt.items).map((item) => (
        <li key={item.id} className={Cls["cart-item"]}>
          <div>
            <h2 className="text-xl">{item.shoeName}</h2>
            <div>
              <span className="font-bold text-blue-800">${item.price}</span>
              <span className={Cls.amount}>x{item.Quantity}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  let totalAmount = 0;
  ctxt.items.forEach((item) => {
    totalAmount += +item.price;
  });
  return (
    <Modal>
      {cartMaterial}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={Classes.actions}>
        <button className={Classes["button--alt"]} onClick={props.cartClose}>
          Close
        </button>
        {hasItem && <button className={Classes.button} onClick={clearCart}>Order</button>}
        {orderMsg && <p className="text-center text-green-800 text-2xl">Order Success !!</p>}
      </div>
    </Modal>
  );
};

export default CartItems;

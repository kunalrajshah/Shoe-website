import React,{useEffect} from "react";
import { useContext } from "react";
import CartContext from "./Store/CartContext";


const Output = (props) => {

  // Get data from LocalStorage
  useEffect(()=>{
    const storeData=JSON.parse(localStorage.getItem("items"));
    if(storeData){
      props.toggleData(storeData);
    }
  },[])

  // Local Storage set
  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(props.inputsData));
  },[props.inputsData]);
  

  // For contextAPI
  const ctxt=useContext(CartContext);

  // For Decrement quantity on click buy button
  const decrementQuantityL = (itemID,size) => {
    const updatedData=props.inputsData.map((item)=>{
      if(item.id === itemID){
        ctxt.addItem({...item,Size:size});
        const updatedQuantities={...item.quantities};
        updatedQuantities[size]=updatedQuantities[size]-1;

        return{...item,quantities:updatedQuantities};
      }
      return item; //if id is not matches then it return original item.
    });
    props.toggleData(updatedData);
  };

  const decrementQuantityM = (itemID,size) => {
    const updatedData=props.inputsData.map((item)=>{
      if(item.id === itemID){
        ctxt.addItem({...item,Size:size});
        const updatedQuantities={...item.quantities};
        updatedQuantities[size]=updatedQuantities[size]-1;

        return{...item,quantities:updatedQuantities};
      }
      return item;  
    });
    props.toggleData(updatedData);
  };

  const decrementQuantityS = (itemID,size) => {
    const updatedData=props.inputsData.map((item)=>{
      if(item.id === itemID){
        ctxt.addItem({...item,Size:size});
        const updatedQuantities={...item.quantities};
        updatedQuantities[size]=updatedQuantities[size]-1;

        return{...item,quantities:updatedQuantities};
      }
      return item;
    });
    props.toggleData(updatedData);
  };

  return (
    <div className="p-8">
      {props.inputsData.map((item) => (
        <div key={item.id} className="mb-4 border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">{item.shoeName}</h2>
          <p className="text-gray-600 mb-2">{item.description}</p>
          <p className="text-indigo-600 font-semibold">${item.price}</p>
          <div className="mt-4">
            <button
              className={`mr-2 bg-indigo-600 text-white px-4 py-2 rounded-lg focus:outline-none ${
                item.quantities.L === 0 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={item.quantities.L === 0}
              onClick={() => decrementQuantityL(item.id,"L")}
            >
              Buy Large ({item.quantities.L} available)
            </button>
            <button
              className={`mr-2 bg-indigo-600 text-white px-4 py-2 rounded-lg focus:outline-none ${
                item.quantities.M === 0 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={item.quantities.M === 0}
              onClick={() => decrementQuantityM(item.id,"M")}
            >
              Buy Medium ({item.quantities.M} available)
            </button>
            <button
              className={`bg-indigo-600 text-white px-4 py-2 rounded-lg focus:outline-none ${
                item.quantities.S === 0 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={item.quantities.S === 0}
              onClick={() => decrementQuantityS(item.id,"S")}
            >
              Buy Small ({item.quantities.S} available)
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Output;

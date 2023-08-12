import React,{useState} from 'react'
import CartIcon from './cartIcon';
import ShoeDescPriceInput from './ShoeDescPriceInput';
import Quantitysize from './Quantitysize';
import Output from './Output';

const Input = () => {
  const [shoeName,setShoeName]=useState('');
  const [description,setDescription]=useState('');
  const [price,setPrice]=useState('');
  const [quantL,setQuantL]=useState('');
  const [quantM,setQuantM]=useState('');
  const [quantS,setQuantS]=useState('');

  // For Output 
  const [data,setData]=useState([]);

  const shoeNameHandler=(event)=>{
    setShoeName(event.target.value);
  }
  const descHandler=(event)=>{
    setDescription(event.target.value);
  }
  const priceHandler=(event)=>{
    setPrice(event.target.value);
  }
  const qunatLHanddler=(event)=>{
    setQuantL(event.target.value);
  }
  const qunatMHanddler=(event)=>{
    setQuantM(event.target.value);
  }
  const qunatSHanddler=(event)=>{
    setQuantS(event.target.value);
  }
  
  
  const InputDatasHandler=(event)=>{
    event.preventDefault();
    const obj={
      id:shoeName,
      shoeName:shoeName,
      description:description ,
      price :price,
      quantities:{
        L:parseInt(quantL),
        M: parseInt(quantM),
        S: parseInt(quantS)
        },
    };  
    setData([...data,obj]);
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <CartIcon />
   
    <form className="bg-white p-8 shadow-md rounded-lg">
      <div className="mb-4">
       <ShoeDescPriceInput label="Shoe Name" type="text" name="name" value={shoeName} onChange={shoeNameHandler} />
       <ShoeDescPriceInput label="Description" type="text" name="description" value={description} onChange={descHandler} />
       <ShoeDescPriceInput label="Price" type="number" name="price" value={price} onChange={priceHandler} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Quantity Available</label>
        <div className="flex space-x-4">
          <Quantitysize label="L" name="L" value={quantL} onChange={qunatLHanddler}/>
          <Quantitysize label="M" name="M" value={quantM} onChange={qunatMHanddler}/>
          <Quantitysize label="S" name="S" value={quantS} onChange={qunatSHanddler}/>
        </div>
      </div>
      <button
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        type="button" onClick={InputDatasHandler}
      >
        Add Product
      </button>
    </form>
    <Output inputsData={data}/>
  </div>
  )
}

export default Input;
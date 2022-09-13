import React from 'react';
import {useCart} from 'react-use-cart'

const ProductItem = ({img,category,name,size,price,addproduct}) => {
  const {addItem}=useCart();
  return (
    <div className="card mx-1 mb-2" style={{width: '18rem',padding:'0',border:'none'}}>
    <img src={img} className="card-img-top" style={{cursor:'pointer'}} alt="..." />
    <div className="card-body">
      <h5 className="card-title text-danger">{category}</h5>
      <p className="card-text text-primary">{name}</p>
      <p className="text-primary card-text"><b>Beden:</b> {size}</p>
      <h3 className="card-text text-danger">{price} TL </h3>
      <button onClick={()=>{addItem(addproduct,alert("added successfully"))}} className="btn btn-primary" type='button'>Sepete ekle</button>
    </div>
  </div>
  )
}

export default ProductItem
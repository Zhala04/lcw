import React from 'react'
import ProductItem from './ProductItem';
import productsdata from '../data/data'

const Products = () => {
  return (
    <div >
    <div className="container mt-5">
      <div className="row ms-5">
       {productsdata.map((fd,i)=>{
        return <ProductItem 
        img={fd.img}
        category={fd.category}
        name={fd.name}
        size={fd.size}
        price={fd.price}
        addproduct={fd}
        key={i}
        />
       })}
      </div>
    </div>
    </div>
  )
}

export default Products
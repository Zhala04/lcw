import React from 'react';
import {useCart} from 'react-use-cart'

const Cart = () => {
  const {isEmpty,items,updateItemQuantity,removeItem,cartTotal,emptyCart}=useCart();
  if(isEmpty) return <div className="container d-flex justify-content-center align-items-center flex-column" style={{height:'90vh',width:'100%'}}>
    <h3 style={{color:'#D4020D',margin:'100px'}}>Sepetiniz boş :(</h3>
    <img src="https://hakimitr.com/assets/website/images/empty-cart.gif" alt="" className='mt-3' style={{transform:'scale(1.5)'}} /></div>
  return (
    <div className='container mt-5'>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">Ürün adı</th>
      <th scope="col">Fiyat</th>
      <th scope="col">Adet</th>
      <th scope="col">Sil</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item,index)=>{
      return(
    <tr>
      <th scope="row">{index+1}</th>
      <td><img src={item.img} alt="" width='100' /></td>
      <td style={{fontSize:'30px'}}>{item.name}</td>
      <td style={{fontSize:'30px'}}>{item.price*item.quantity} TL</td>
      <td style={{fontSize:'25px'}}>
        <button className='btn btn-danger' onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
        <span className='mx-2'>{item.quantity}</span>
        <button className='btn btn-success' onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
        </td>
      <td>
        <button className='btn btn-danger' onClick={()=>{removeItem(item.id)}}>X</button>
      </td>
    </tr>
      )
    })}
  
  </tbody>
</table>
<div>
  <h4>Toplam ücret: {cartTotal} TL</h4>
</div>
<div>
  <button className='btn btn-danger mt-3' onClick={()=>{emptyCart()}}>Sepeti temizle</button>
</div>
    </div>
  )
}

export default Cart
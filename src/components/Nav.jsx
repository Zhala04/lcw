import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {useCart} from 'react-use-cart';
import lcw from '../img/lcw.png'

const Nav = () => {
  const {totalItems}=useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderBottom:'1px solid #E8E3E2',height:'60px'}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'><img src={lcw} alt="" width='100' /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname='active' to='/'>Ana sayfa</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link" activeclassname='active' to='/products'>Ürünler</NavLink>
          </li>
        

        </ul>
        <form className="d-flex">
        <Link className="btn btn-outline-primary" to='/cart' >Sepet ({totalItems})</Link>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Nav
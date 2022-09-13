import React from 'react';
import '../css/main.css';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='main d-flex justify-content-center align-items-center flex-column'>
      <h1><a href="">lcwaikiki.com </a> online alışveriş sitesine hoşgeldiniz!!!</h1>
      <Link className='btn btn-primary mt-5' to='/products'>Alışveriş yap</Link>
    </div>
  )
}

export default Home
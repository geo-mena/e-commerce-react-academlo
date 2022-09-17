import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import './styles/cardHome.css'

const CardHome = ({product}) => {

  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }
// función para agregar un producto al cart
  const handleAddCart = e => {
    e.stopPropagation()
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: product.id,
      quantity: 1
    }
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <article onClick={handleClick} className='card-home'>
      <header className='card-home__header'>
        <img className='card-home__img' src={product.productImgs[0]} alt="" />
      </header>
      <div className='card-home__body'>
        <h3 className='card-home__name'>{product.title}</h3>
        <section className='card-home__price'>
          <h4 className='card-home__price-label'>Price</h4>
          <span className='card-home__price-value'>{product.price}</span>
        </section>
        <button onClick={handleAddCart} className='card-home__btn'>
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </article>
  )
}

export default CardHome
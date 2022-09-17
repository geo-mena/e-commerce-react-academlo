import React from 'react'
import ProductPurchase from './ProductPurchase'

const PurchaseCrad = ({ purchase }) => {

  console.log(purchase)

  return (
    <article className='card-purchase'>
      <h3 className='card-purchase__date'>{purchase.createdAt}</h3>
      <ul className='card-purchase__body'>
        {
          purchase.cart.products.map(product => (
            <ProductPurchase
              key={product.id}
              product={product}
            />
          ))
        }
      </ul>

    </article>
  )
}

export default PurchaseCrad
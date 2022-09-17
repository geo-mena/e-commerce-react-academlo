import React from 'react'
import ProductPurchase from './ProductPurchase'

const PurchaseCard = ({purchase}) => {

  let dateTitle = new Date(purchase.createdAt)

  dateTitle = dateTitle.toLocaleString('en-GB', { timeZone: 'UTC' })

  return (
    <article className='card-purchase'>
      <h3 className='card-purchase__date'>{dateTitle}</h3>
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

export default PurchaseCard
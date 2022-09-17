import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/ProductDescription'
import SimilarProducts from '../productDetail/SimilarProducts'
import SliderImg from '../productDetail/SliderImg'
import './styles/productDetail.css'

const ProductDetail = () => {

  const [productInfo, setProductInfo] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProductInfo(res.data.data.product))
      .catch(err => console.log(err))
  }, [])

  console.log(productInfo)

  return (
    <main className='product-detail'>
      <SliderImg productInfo={productInfo} />
      <ProductDescription
        productInfo={productInfo}
      />
      <section className='similar-product'>
        <h2 className='similar-product__title'>Discover similar Items</h2>
        <SimilarProducts
          productInfo={productInfo}
        />
      </section>
    </main>
  )
}

export default ProductDetail
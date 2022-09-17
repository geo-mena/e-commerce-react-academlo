import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductByCategory } from '../../store/slices/products.slice'
import './styles/categoryFilter.css'

const CategoryFilter = () => {

  const [categories, setCategories] = useState()
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])

  const dispatch = useDispatch()

  const handleClickCategory = id => {
    dispatch(getProductByCategory(id))
    setActiveCategory(id)
  }

  const handleClickAllProducts = () => {
    dispatch(getAllProducts())
    setActiveCategory(0)
  }

  return (
    <div className='category'>
      <h3 className='category__title'>Category</h3>
      <ul className='category__list'>
        <li className={`category__item active${activeCategory === 0}`} onClick={handleClickAllProducts}>All Products</li>
        {
          categories?.map(category => (
            <li 
              className={`category__item active${activeCategory === category.id}`} 
              onClick={() => handleClickCategory(category.id)} 
              key={category.id}
            >
              {category.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CategoryFilter
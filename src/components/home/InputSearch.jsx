import React from 'react'
import './styles/inputSearch.css'

const InputSearch = ({setInputSearch}) => {

  const handleChange = e => {
    setInputSearch(e.target.value.trim())
  }

  return (
    <div className='container-input-search'>
      <input className='input-search' onChange={handleChange} type="text" placeholder='Search' />
    </div>
  )
}

export default InputSearch
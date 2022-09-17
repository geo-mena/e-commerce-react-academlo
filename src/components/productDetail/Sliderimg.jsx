import React, { useState } from 'react'
import './styles/sliderImg.css'

const SliderImg = ({productInfo}) => {

  const [indexImg, setIndexImg] = useState(0)

  const imgQuantity = productInfo?.productImgs.length

  const objStyle = {
    transform: `translateX(calc(-${indexImg / imgQuantity} * 100%))`
  }

  const handlePrev = () => {
    if(indexImg - 1 >= 0){
      setIndexImg(e => e - 1)
    } else {
      setIndexImg(imgQuantity - 1)
    }
  }

  const handleNext = () => {
    if(indexImg + 1 <= imgQuantity - 1){
      setIndexImg(e => e + 1)
    } else {
      setIndexImg(0)
    }
  }

  return (
    <div className='slider'>
      <button onClick={handlePrev} className='slider__prev'>&#60;</button>
      <div style={objStyle} className='slider-interior'>
        {
          productInfo?.productImgs.map((img, index) => (
            <div
              className='slider__container-img' 
              key={img}
            >
              <img 
                className='slider__img' 
                src={img} 
                alt={`image de ${productInfo.title} ${index}`} 
              />
            </div>
          ))
        }
      </div>
      <button onClick={handleNext} className='slider__next'>&#62;</button>
    </div>
  )
}

export default SliderImg
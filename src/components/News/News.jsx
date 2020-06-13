import React, {useState} from 'react';
import addImg from '../../assets/images/play-button.png'
import removeImg from '../../assets/images/remove.png'
import style from './News.module.css'

const News = ({initialCount}) => {
  const [count, setCount] = useState(initialCount=0)

  const minusCount = (prevCount) => {
    setCount(prevCount => prevCount - 1)
  }

  if (count < 0) {
    setCount (initialCount)
  }

  return(
    <>
      News: {count}
      <button onClick={()=> setCount(initialCount)}>Reset</button>
      <button onClick={()=> setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={minusCount}>-</button>
    </>
  )
}
export default News;

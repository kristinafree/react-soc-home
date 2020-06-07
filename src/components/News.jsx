import React from 'react';
import s from './News.module.css'

const News = (props) => {
  return (
    <div className = {s.img}>
      {<img src = 'https://habrastorage.org/webt/v4/na/xg/v4naxgyec9pamduy0s1qf7gjqyc.png' />}
    </div>
  )
}
export default News;

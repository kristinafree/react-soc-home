import React, { useState } from 'react'
import styles from '../Music/music.module.css'
import addImg from '../../assets/images/play-button.png'
import removeImg from '../../assets/images/remove.png'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'


const Music = () => {
  const [count, setCount] = useState(null)

  const newTreack = <img src='https://i1.sndcdn.com/artworks-000132810615-0q62i5-t120x120.jpg' />

  const addTreack = (count) => {
    return setCount(newTreack)
  }

  const removeTreack = (count) => {
    return setCount(!newTreack)
  }

    return ( 
      <div>
          <h1 style={{color: "911A91"}}>PLAYLIST <img /> </h1>
              <p>{count}</p>
               <button style={{backgroundcolor: "fff", color: "fff", borderRadius: '10'}}onClick={addTreack}>
                <img src={addImg} /> 
              </button>
               <button onClick={removeTreack}>
               <img src={removeImg} /> 
              </button>
      </div>
    )
}

export default Music



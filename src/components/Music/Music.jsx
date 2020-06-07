import React from 'react';
import styles from '../Music/music.module.css';
import musicPhoto from '../../assets/images/music.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


const Music = (props) => {
    return ( 
      <div>
          <h1>ACTION MUSIC</h1>
            <NavLink to = {'/profile'}>
              <img src = 'https://i2.wp.com/expert.com.ua/wp-content/uploads/2018/11/YouTube-Music.jpg' />
            </NavLink>
      </div>
    )
}
export default Music;
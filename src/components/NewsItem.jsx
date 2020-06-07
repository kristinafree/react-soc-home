import React from 'react';
import s from './News.module.css'
import { NavLink } from 'react-router-dom';

const NewsItem = (props) => {
    
    let path = "/news/" + props.id;

    return (
        <div>
             <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
}

export default NewsItem;
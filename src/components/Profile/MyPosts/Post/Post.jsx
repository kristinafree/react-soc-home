import React from 'react';
import s from "./Post.module.css"

const Post = (props) => {
    return (
          <div className = {s.item}>
            <img src = 'https://cdn130.picsart.com/241364632051212.png?type=webp&to=min&r=1024'/>
            <span>{props.number}</span>
            <div>
              <span>{props.message}</span>
            </div>
          </div>
)}

export default Post;
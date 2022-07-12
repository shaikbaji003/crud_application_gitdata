import React from 'react';
import './Card.css';


export default function Card ({post,editFunc,deleteFunc}) {
    
  return (
    <div key={post.id}  className='card' style={{ border: "1px solid black", margin: "10px" }}>
          <h4 style={{ display: "inline", margin: "10px" }}>{post.title}</h4>
          <div className='buttonDivision'>
            <button className='btn' onClick={() => editFunc(post)}>
                Edit
            </button>
            <button
                className='btn_del'
                onClick={() => deleteFunc(post.id)}> Delete</button>
          </div>
        </div>
  )
}

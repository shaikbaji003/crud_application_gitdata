import React from "react";
import Card from "./Card";
import './Cardlist.css';

function CardList({ data, editFunc, deleteFunc }) {
  return (
    <div className="cardList">
      {data.map((post) => (
        <Card key={post.id} post={post} editFunc={editFunc} deleteFunc={deleteFunc}/>
      ))}
    </div>
  );
}

export default CardList;

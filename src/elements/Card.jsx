import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => (
  <div className="flex flex-col w-[350px] justify-center items-center shadow-lg rounded-lg p-4 bg-white">
    <img
      src={`/images/${props.image}`}
      alt={props.name}
      className="h-[210px]"
    />
    <h1 className="text-2xl text-center">{props.name}</h1>
    <p className="text-center mx-5 mt-2 h-36">{props.details}</p>
    <button className="bg-white text-red-500 w-full  border-red-500 border-2">
      <Link to={`/product/${props.productid}`}>ซื้อดิ</Link>
    </button>
  </div>
);

export default Card;

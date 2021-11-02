import React from "react";
import { Link, useRouteMatch } from"react-router-dom";

const AnimalsCard = (props) => {
  let match =useRouteMatch();

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={`https://source.unsplash.com/1600x900/?${props.name}`} />
      <Link to ={`${match.url}/${props.name}`}>See more</Link>
    </div>
  );
};

export default AnimalsCard;
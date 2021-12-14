import React from "react";
import { useParams, useHistory } from "react-router-dom";

const AnimalSingle = () => {
  let { animal } = useParams();
  let history = useHistory();
  return (
    <div className="singlePage">
      <p>This is the page for {animal}</p>

      <img src={`https://source.unsplash.com/1600x900/?${animal}`} />
      <button onClick={() => history.goBack()}>Back to animals</button>
    </div>
  );
};

export default AnimalSingle;

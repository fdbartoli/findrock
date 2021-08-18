import React from "react";
import "./artist-card.css";

function ArtistCard(props) {
  return (
    <div className="col-3">
      <div className="item">
        <img className="pic" src={props.pic} alt="imagen" />
        <p className="titulo">{props.name}</p>
      </div>
    </div>
  );
}

export default ArtistCard;

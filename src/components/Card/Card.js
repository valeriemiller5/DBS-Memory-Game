import React from "react";
import "./Card.css";

const Card = props => (
  <div>
    <label>
      <input type="checkbox" />
      <div className="card">
        <div className="card_face front">
          <img alt={props.name} onClick={() => props.handleClick(props.id)} src={require("../../images/background.jpeg")} />
        </div>
        <div className="card_face back">
          <img alt={props.name} onClick={() => props.handleClick(props.id)} src={require("../../images/" + props.image)} />
        </div>
      </div>
    </label>
  </div>
);

export default Card;

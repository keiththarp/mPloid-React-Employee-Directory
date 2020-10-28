import React from "react";
import "./style.css";

function Card(props: any) {
  return (
    <div className="employee-card">
      <img alt="" src={`${props.photo}`} />
    </div>
  );
}

export default Card;
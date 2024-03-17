import React from "react";
import "./Card1.css";

const Card1 = ({emoji}) => {
    return(
        <div className="card1">
            <img src={emoji} alt="" className="c-emoji" />
        </div>
    )
}

export default Card1;
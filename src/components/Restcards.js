import React from "react";
import { card_url } from "../utils/mockdata";

const Restcards = (props) => {
    const {items} = props
    const {name, cuisines,cloudinaryImageId,avgRating,costForTwo} = items?.info
    return(
        <div className="res-card">
            <img className="res-card-img" src= {card_url + cloudinaryImageId} alt ="card-img"/>
                <h3 className="rescard-heading">{name}</h3>
                <h6>{cuisines.join(",")}</h6>
                <h6>{costForTwo}</h6>
                <h6>{avgRating} Stars</h6>
                
        </div>
    )
}
export default Restcards;
import React from "react";
// import { card_url } from "../utils/mockdata";
const Restcards = (props) => {


    
    return(
        <div className="res-card">
                <img className="res-card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" alt ="card-img"/>
                <h3 className="rescard-heading">{props?.info?.name}</h3>
             
        </div>
    )
}
export default Restcards;
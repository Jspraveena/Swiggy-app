import React, { useEffect, useState } from "react";
import Restcards from "./Restcards";
     
const Body = () => {

  const [listOfRestarents,setListOfRestarents] = useState([]);
  useEffect(() => {
    fetchData();

  },[]);
  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setListOfRestarents(json?.data?.cards[2]?.card?.card)
  
}
  
    return(
        <><div className="filter">
            <button className="filter-btn" onClick={() => {const filteredList = listOfRestarents.filter((res) => res.info.avgRating > 4);
            setListOfRestarents(filteredList);
            console.log(filteredList);
            }}>Top Rated Restarents</button>

        </div>
        <div className="res-container">
                {listOfRestarents.map((item) => {
                    return <Restcards key={item?.info?.id} items={item} />;

                })}

            </div></>

    )
}

export default Body;
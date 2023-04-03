import React from "react";

function TruckCard({id,make,image,model,likes}) {


    return (
        <div className="TruckCard">
            <h4>{make}</h4>
            <h4>{model}</h4>
            <img src={image} alt={id}/>
            <button>{likes}</button>
        </div>
    )
}

export default TruckCard
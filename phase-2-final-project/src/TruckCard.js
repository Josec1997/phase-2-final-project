import React from "react";

function TruckCard({id,make,image,model}) {


    return (
        <div className="truckCard">
            <h4>{make} - {model}</h4>
            <img id ="truck-image" src={image} alt={id}/>
            <button id="delete-btn">Delete</button>
        </div>

    )
}

export default TruckCard
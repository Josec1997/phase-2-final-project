import React from "react";
import TruckCard from "./TruckCard"

function TruckContainer({trucks}){

   
 console.log(trucks)

    const truckObj =trucks.map(truck => {
        return <TruckCard
        truck={truck}
        key={truck.id}
        make={truck.make}
        model={truck.model}
        image={truck.image} 
        likes={truck.likes}/> 
    })

    console.log("TruckCard! :",truckObj)

    return (
        <div className="truckGallery" >
            <h2>Showcased Trucks</h2>
            <ul>{truckObj}</ul>
            <button id="delete-button">Delete</button>
        </div>
    )
}

export default TruckContainer
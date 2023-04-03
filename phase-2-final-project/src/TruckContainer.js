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
        <div className="TruckGallery" >
            <h3>Showcased Trucks</h3>
            <div>{truckObj}</div>
        </div>
    )
}

export default TruckContainer
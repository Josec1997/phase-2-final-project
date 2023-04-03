import React from "react";
import Truck from "./Truck"

function TruckContainer({trucks}){

   


    const truckObj =trucks.map(truck => {
        <Truck 
        truck={truck}
        key={truck.id} 
        make={truck.make}
        model={truck.model}
        image={truck.image} 
        likes={truck.likes}/> 
    })

    console.log(truckObj)

    return (
        <div className="TruckGallery" >
            <h3>Showcased Trucks</h3>
            <div>{truckObj}</div>
        </div>
    )
}

export default TruckContainer
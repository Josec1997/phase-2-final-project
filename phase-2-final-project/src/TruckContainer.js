import React from "react";
import TruckCard from "./TruckCard"

function TruckContainer({trucks}){


    const truckObj =trucks.map(truck => {
        return <TruckCard
        truck={truck}
        key={truck.id}
        make={truck.make}
        model={truck.model}
        image={truck.image} />
    })

    console.log("TruckCard! :",truckObj)

    return (
        <div className="truckGallery" >
            <h2>Showcased Trucks</h2>
            <ul>{truckObj}</ul>
        </div>
    )
}

export default TruckContainer
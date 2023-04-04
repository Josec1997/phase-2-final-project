import React from "react";
import TruckCard from "./TruckCard"

function TruckContainer({trucks,deleteTruck}){
    

    const truckObj =trucks.map(truck => {
        return <TruckCard
        key ={truck.id}
        deleteTruck={deleteTruck}
        truck={truck}
        />
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
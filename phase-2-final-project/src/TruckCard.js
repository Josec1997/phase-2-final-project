import React from "react";

function TruckCard({deleteTruck,truck}) {

    function handleDelete(){
        fetch(`http://localhost:4000/trucks/${truck.id}`,{
            method:"DELETE",
        }) 
        deleteTruck(truck.id)
    }

    return (
        <div className="truckCard">
            <h4>{truck.make} - {truck.model}</h4>
            <img id ="truck-image" src={truck.image} alt={'404 not found'}/>
            <button onClick={handleDelete} id="delete-btn">Delete</button>
        </div>

    )
}

export default TruckCard
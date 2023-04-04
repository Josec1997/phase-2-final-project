import React from "react";

function TruckCard({id,make,image,model,deleteTruck}) {

    function handleDelete(){
        fetch(`http://localhost:4000/trucks${id}`,{
            method:"DELETE",
        }) 
        deleteTruck(id)
    }

    return (
        <div className="truckCard">
            <h4>{make} - {model}</h4>
            <img id ="truck-image" src={image} alt={id}/>
            <button onClick={handleDelete} id="delete-btn">Delete</button>
        </div>

    )
}

export default TruckCard
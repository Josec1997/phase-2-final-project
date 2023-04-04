import React, { useState } from "react";

function AddTruck() {

  const[truckObj,setTruckObj]=useState({
    make:"",
    model:"",
    image:"",
    })
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log("SUBMITTED!")
     
    return (
    <div> 
        <h3>Add Truck</h3>
        <form onSubmit={handleSubmit}  className="addTruck" >
            <label htmlFor="make"> Add Make  </label>
            <input required type="text" name="make" value={truckObj.make}/>

            <label htmlFor="model">Add Model</label>
            <input required type="text" name="model" value={truckObj.model}/>

            <label htmlFor="AddURL">Add Truck URL</label>
            <input required type ="text" name ="image" value={truckObj.image}/>
            <input type ="submit" value = "submit"/>
         


        </form>
    </div>
        
    )
 }
} 
export default AddTruck
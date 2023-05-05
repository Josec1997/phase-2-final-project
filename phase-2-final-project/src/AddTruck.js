import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddTruck({addNewTruck}) {

  const [truckObj,setTruckObj]= useState({
    make:"",
    model:"",
    image:"",
    })

    const history = useHistory()  
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitted!")
        fetch('http://localhost:4000/trucks',{
            method: "POST",
            headers: {
            "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "make":truckObj.make,
                "model":truckObj.model,
                "image":truckObj.image
            })
        })
            .then(r=> r.json())
            .then(data => addNewTruck(data))
            history.push("/TruckGallery")
    }

    function handleChange(e){
        const key = e.target.name
        const val = e.target.value
        setTruckObj({...truckObj,[key]:val})
        console.log("added:",truckObj)
    }

    return (
    <div>
        <br></br>
        <br></br>
        <h3>Add Truck</h3>
        <form onSubmit={handleSubmit}  className="addTruck" >
            <label htmlFor="make"> Add Make  </label>
            <input onChange={e => handleChange(e)} required type="text" name="make" value={truckObj.make}/>

            <label htmlFor="model">Add Model</label>
            <input onChange={e => handleChange(e)} required type="text" name="model" value={truckObj.model}/>

            <label htmlFor="AddURL">Add Truck URL</label>
            <input onChange={e => handleChange(e)} required type ="text" name ="image" value={truckObj.image}/>
            <input onChange={e => handleChange(e)} type ="submit" value = "submit"/>
         


        </form>
    </div>
        
    )
 }

export default AddTruck
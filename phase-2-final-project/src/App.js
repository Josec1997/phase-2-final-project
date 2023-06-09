import React, { useEffect, useState } from "react";
import Home from "./Home"
import Header from "./Header"
import TruckContainer from "./TruckContainer"
import AddTruck from "./AddTruck"
import NavBar from "./NavBar"
import About from "./About";

import {Switch,Route} from "react-router-dom"

function App() {
 
  const [trucks,setTrucks] = useState([])
  
  useEffect( () => {
    fetch("http://localhost:4000/trucks")
    .then(r => r.json())
    .then (truckData => {
      console.log(truckData)
      setTrucks(truckData)} )
  }, [])

  function addNewTruck(newTruck){
    setTrucks([...trucks,newTruck])
  }
 
  function deleteTruck(id){
    const updatedTrucks = trucks.filter(truck => truck.id !== id)
    console.log("DELETE!",id)
    setTrucks(updatedTrucks)
  }

  return (
    <div>
      <Header/>
      <NavBar />
      <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/truckGallery">
            <TruckContainer deleteTruck={deleteTruck} trucks={trucks} />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path ="/addTruck">
          <AddTruck addNewTruck={addNewTruck}/>
        </Route>
        <Route path = "*">
            <h5>Warning: error 404 not found</h5>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

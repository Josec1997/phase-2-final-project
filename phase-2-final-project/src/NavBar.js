import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {



    return (
        <nav>
            <NavLink exact to = "/"> Home </NavLink>
            <NavLink to = "/About"> About </NavLink>
            <NavLink to = "/TruckGallery"> Truck Gallery </NavLink>
            <NavLink to = "/AddTruck"> Add a Truck </NavLink>
        </nav>
    )
}

export default NavBar
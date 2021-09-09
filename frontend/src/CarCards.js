import React, { useEffect , useState } from 'react'
import CarEditor from './CarEditor'
import CarViewer from './CarViewer'

function CarCards({cars, toggleEdit, setToggleEdit, handleEdit, handleDisplay }) {
    
    function handleDisplayClick(){
        handleDisplay(cars.id)
        console.log ("carcard", cars.id)
        
    }
    

    function handleDelete(){
        console.log("delete", cars.id)
        const id = cars.id
    
        fetch(`http://localhost:3000/cars/${id}`, {
         method: "DELETE",
            })
    
    }
    


    return (

        <ul onClick={handleDisplayClick}>
            <h3>Parked Car #{cars.id} </h3>
            <h5>Owner:{cars.Owner}</h5>
            <h5>Color:{cars.color}</h5>
            <h5>Vehicle Make:{cars.vehicleMake}</h5>
            <h5>Vehicle Model:{cars.vehicleModel}</h5>
            <button type="submit" onClick={handleEdit}>Edit Car Details</button>
            <button onClick={handleDelete}>Delete</button>

        </ul>
    )
} 

export default CarCards
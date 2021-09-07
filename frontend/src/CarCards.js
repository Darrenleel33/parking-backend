import React from 'react'
import Content from './Content'
function CarCards({cars, toggleEdit, setToggleEdit, handleEdit, id, Owner, color, vehicleMake, vehicleModel}) {
    

    
    

    return (

        <div>
            <h3>Parked Car </h3>
            <h5>Owner:{cars.Owner}</h5>
            <h5>Color:{cars.color}</h5>
            <h5>Vehicle Make:{cars.vehicleMake}</h5>
            <h5>Vehicle Model:{cars.vehicleModel}</h5>
            <button onClick={handleEdit}>Edit Car Details</button>
            <button>Delete</button>
        </div>
    )
} 

export default CarCards
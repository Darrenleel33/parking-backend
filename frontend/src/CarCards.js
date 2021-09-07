import React from 'react'

function CarCards({cars, toggleEdit, setToggleEdit, handleEdit}) {
    








    function handleDelete(){
    console.log("delete", cars.id)
    }
    
    

    return (

        <div>
            <h3>Parked Car #{cars.id} </h3>
            <h5>Owner:{cars.Owner}</h5>
            <h5>Color:{cars.color}</h5>
            <h5>Vehicle Make:{cars.vehicleMake}</h5>
            <h5>Vehicle Model:{cars.vehicleModel}</h5>
            <button onClick={handleEdit}>Edit Car Details</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
} 

export default CarCards
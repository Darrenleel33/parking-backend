import React from 'react'

function CarCards({cars, handleToggle, id, Owner, color, vehicleMake, vehicleModel}) {
    
    
    

    return (
        //create a container/button for car click to show on big page
        <div >
            <h3>Parked Car </h3>
            <h5>Owner:{cars.Owner}</h5>
            <h5>Color:{cars.color}</h5>
            <h5>Vehicle Make:{cars.vehicleMake}</h5>
            <h5>Vehicle Model:{cars.vehicleModel}</h5>
            <button onClick={handleToggle}>Edit Car Details</button>
            <button>Delete</button>
        </div>
    )
}

export default CarCards
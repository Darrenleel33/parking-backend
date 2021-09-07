import React from 'react'

function CarCards({cars, id, Owner, color, vehicleMake, vehicleModel}) {
    
    
    
    return (
        <div>
       
            <h3>Parked Car </h3>
            <h4>Owner:{Owner}</h4>
            <h4>Color:{color}</h4>
            <h4>Vehicle Make:{vehicleMake}</h4>
            <h4>Vehicle Model:{vehicleModel}</h4>
            <button>Edit</button>
            <button>Delete</button>

        </div>
    )
}

export default CarCards
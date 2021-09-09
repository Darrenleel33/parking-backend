import React from 'react'



function CarViewer({cars, handleEdit, handleDelete, id, displayCar}) {
   

//function to fetch id car from rails db


    return (
        
        <div>
            <h1>CURRENTLY DISPLAYING</h1>
            {/* <h3>Parked Car #{id} </h3> */}
            <h5>Owner:{displayCar.Owner}</h5>
            <h5>Color:{displayCar.color}</h5>
            <h5>Vehicle Make:{displayCar.vehicleMake}</h5>
            <h5>Vehicle Model:{displayCar.vehicleModel}</h5>
            <button onClick={handleEdit}>Edit Car Details</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
     
    )
}
export default CarViewer
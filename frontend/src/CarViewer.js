import React from 'react'
import Button from 'react-bootstrap/Button';



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
            <Button variant="outline-success" type="submit" onClick={handleEdit}>Edit Car Details</Button>
            <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
            <Button variant="outline-primary" >Info</Button>
        </div>
     
    )
}
export default CarViewer
import React, { useEffect , useState } from 'react'
import CarEditor from './CarEditor'
import CarViewer from './CarViewer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';

function CarCards({cars, toggleEdit, setToggleEdit, handleEdit, handleDisplay, updateCarArray }) {
    
    const [open, setOpen] = useState(false);

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
        <Card border="dark" style={{ width: '18rem'}} onClick={handleDisplayClick}>
        <Card.Header>Parked car </Card.Header>
        <Card.Body>
            
          <Card.Title>Owner: {cars.Owner}</Card.Title>
          <Card.Text>Color: {cars.color}</Card.Text>
          <Card.Text>Vehicle Make: {cars.vehicleMake}</Card.Text>
          <Card.Text>Vehicle Model: {cars.vehicleModel}</Card.Text>
           
        <Button variant="outline-success" size="sm" type="submit" onClick={handleEdit}>Edit Details</Button>
        &nbsp;&nbsp;
        <Button variant="outline-danger" size="sm" onClick={handleDelete}>Delete</Button>
        &nbsp;&nbsp;
        <Button variant="outline-primary" size="sm">ticket Info</Button>
        </Card.Body>
      </Card>
        // <ul >
        //     <h2></h2>
        //     <h5>Owner:{cars.Owner}</h5>
        //     <h5>Color:{cars.color}</h5>
        //     <h5>Vehicle Make:{cars.vehicleMake}</h5>
        //     <h5>Vehicle Model:{cars.vehicleModel}</h5>
           

        // </ul>
    )
} 

export default CarCards
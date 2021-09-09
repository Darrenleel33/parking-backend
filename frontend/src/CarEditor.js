import React, { useState } from 'react'

function CarEditor({cars, setCar, handleEdit, displayCar }) {
 const [id, setId]=useState(displayCar.id)
 const [Owner, setOwner]=useState(displayCar.Owner)
 const [color, setColor]=useState(displayCar.color)
 const [vehicleMake, setVehicleMake]=useState(displayCar.vehicleMake)
 const [vehicleModel, setVehicleModel]=useState(displayCar.vehicleModel)


  function handleSubmit(e) {
    e.preventDefault()
    let info = {
       car_id:id,
       Owner:Owner,
       color:color,
       vehicleMake: vehicleMake,
       vehicleModel: vehicleModel
    }
    
    
    fetch(`http://localhost:3000/cars/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data => {console.log(data)
    
   
    })
    // console.log(username)
    // console.log(password)
}




return (
  <form>

    <input
      value={Owner}
      onChange={e => setOwner(e.target.value)}
      placeholder="Car Owner"
      type="text"
      name="Car Owner"
     
    />

    <input
      value={color}
      onChange={e => setColor(e.target.value)}
      placeholder="color"
      type="text"
      name="color"
  
    />
    <input
      value={vehicleMake}
      onChange={e => setVehicleMake(e.target.value)}
      placeholder="VehicleMake"
      type="text"
      name="VehicleMake"
  
    />
    <input
      value={vehicleModel}
      onChange={e => setVehicleModel(e.target.value)}
      placeholder="vehicleModel"
      type="text"
      name="vehicleModel"

    />
    <button type="submit" onClick={handleSubmit}>Submit</button>
  </form>
);
}
export default CarEditor;
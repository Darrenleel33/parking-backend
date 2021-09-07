import React, {useState} from 'react'
import { useHistory } from 'react-router'

 function AddCarForm() {
    const [id, setId]=useState('')
    const [Owner, setOwner]=useState('')
    const [color, setColor]=useState('')
    const [vehicleMake, setVehicleMake]=useState('')
    const [vehicleModel, setVehicleModel]=useState('')
   
   
     function handleSubmit(e) {
       e.preventDefault()
       let info = {
          Owner:Owner,
          color:color,
          vehicleMake: vehicleMake,
          vehicleModel: vehicleModel
       }
       fetch('http://localhost:3000/cars', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(info)
       })
       .then(res => res.json())
       .then(data => {console.log(data)
      
       })
   }
   
   return (
     <form>
         <h3> Add a Car to the Parking Lot </h3>
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
export default AddCarForm
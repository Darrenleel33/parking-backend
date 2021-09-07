import React, {useState} from 'react'
import { useHistory } from 'react-router'

 function AddCarForm() {
    
    const [Owner, setOwner]=useState('')
    const [color, setColor]=useState('')
    const [vehicleMake, setVehicleMake]=useState('')
    const [vehicleModel, setVehicleModel]=useState('')
   
    const newCarInfo = {
       Owner:Owner,
       color:color,
       vehicleMake: vehicleMake,
       vehicleModel: vehicleModel
    }
   
     function handleSubmit(e) {
       e.preventDefault()
       fetch('http://localhost:3000/cars', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(newCarInfo)
       })
       .then(res => res.json())
       .then(data => {console.log(data)})
 
       
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
        required
       />
       <input
         value={color}
         onChange={e => setColor(e.target.value)}
         placeholder="color"
         type="text"
         name="color"
        required
       />
       <input
         value={vehicleMake}
         onChange={e => setVehicleMake(e.target.value)}
         placeholder="VehicleMake"
         type="text"
         name="VehicleMake"
        required
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
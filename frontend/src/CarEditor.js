import React from 'react'

function CarEditor({cars, handleToggle, id, Owner, color, vehicleMake, vehicleModel}) {
 
    
    return (
        <div>
            <h3>Editing Mode-Parked Car</h3>
    <form className="car-editor">
     <h5>Owner Name:</h5>
      <input type="text" name="Owner" placeholder="Owner name" value={cars.Owner} />
      <h5>Color</h5>
      <input type="text" name="color" placeholder="Color of the Car" value={cars.color}/>
      <h5>Vehicle Make</h5>
      <input type="text" name="vehicleMake" placeholder="make" value={cars.vehicleMake}/>
      <h5>Vehicle Model</h5>
      <input type="text" name="vehicleModel" placeholder="model" value={cars.vehicleModel}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={handleToggle}>Cancel</button>
      </div>
    </form>
        </div>
    )
}
export default CarEditor;
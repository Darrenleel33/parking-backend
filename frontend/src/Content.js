import React from 'react'
import CarEditor from './CarEditor';
import CarCards from './CarCards';
function Content({toggleEdit, cars, setCars, handleToggle, }) {
    
    return (
        <div>
            {toggleEdit? <CarEditor cars={cars} setCars={setCars} handleToggle={handleToggle}/>:<CarCards cars={cars} setCars={setCars} handleToggle={handleToggle}/>}
        </div>
    )
}



export default Content;
import React, { useState } from 'react'
import CarEditor from './CarEditor';
import CarCards from './CarCards';

function Content({cars, toggleEdit, setToggleEdit, handleEdit, id, Owner, color, vehicleMake, vehicleModel}) {



    const getContent = () => {
        if (toggleEdit) {
          return <CarEditor cars={cars} toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} handleEdit={handleEdit} id={id} Owner={Owner} color={color} vehicleMake={vehicleMake} vehicleModel={vehicleModel}/>;
        } else { 
          return <CarCards cars={cars} toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} handleEdit={handleEdit}/>;
        }
    
      };
    
      return <div className="master-detail-element detail">{getContent()}</div>;
    }



export default Content;
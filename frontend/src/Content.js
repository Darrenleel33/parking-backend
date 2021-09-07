import React, { useState } from 'react'
import CarEditor from './CarEditor';

import CarViewer from './CarViewer';

function Content({cars, toggleEdit, setToggleEdit, handleEdit, handleDelete, id, Owner, color, vehicleMake, vehicleModel}) {



    const getContent = () => {
        if (toggleEdit===true) {
          return <CarEditor key={cars.id} cars={cars} toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} handleEdit={handleEdit} id={id} Owner={Owner} color={color} vehicleMake={vehicleMake} vehicleModel={vehicleModel}/>;
        } else if (toggleEdit===false) { 
          return <CarViewer cars={cars} toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} handleEdit={handleEdit} handleDelete={handleDelete}/>;
        } else { 
          return "nothing"
        }  
      };
    
      return <div className="master-detail-element detail">{getContent()}</div>;
    }



export default Content;
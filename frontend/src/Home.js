import React, {useEffect, useState} from 'react'
import CarCards from './CarCards'
import CarEditor from './CarEditor'
import Board from './components/Board'
import Content from './Content'
import Sidebar from './Sidebar'


function Home() {

    const [cars, setCars] = useState([])
    const [toggleEdit,setToggleEdit]=useState(false)

    function handleEdit(){
        setToggleEdit(!toggleEdit) 
    }
    

    useEffect((e) => {
        fetch('http://localhost:3000/cars')    
        .then(resp => resp.json())
        .then(data => setCars(data))
      }, [])
    
    
    const contentDisplay = cars.map((cars) => {
        return    <CarCards 
        key={cars.id}
        {...cars}
        cars={cars}
        toggleEdit={toggleEdit}
        setToggleEdit={setToggleEdit}
        handleEdit={handleEdit}
        
    />
    })

    return (
        <div>
            <Content cars={cars} handleEdit={handleEdit} toggleEdit={toggleEdit} setToggleEdit={setToggleEdit}/>
            <Sidebar contentDisplay={contentDisplay}/>
        </div>
    )
}
export default Home;
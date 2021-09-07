import React, {useEffect, useState} from 'react'
import CarCards from './CarCards'
import CarEditor from './CarEditor'
import Board from './components/Board'
import Content from './Content'


function Home() {

    const [cars, setCars] = useState([])
    const [toggleEdit, setToggleEdit] = useState(false)


    function handleToggle () {
        setToggleEdit(!toggleEdit)
    }

    useEffect((e) => {
        fetch('http://localhost:3000/cars')    
        .then(resp => resp.json())
        .then(data => setCars(data))
      }, [])
    
    
    const contentDisplay = cars.map((cars) => {
        return    <Content 
        key={cars.id}
        {...cars}
        cars={cars}
        handleToggle={handleToggle}
        toggleEdit={toggleEdit}
        setToggleEdit={setToggleEdit}
      
    />
    })

    return (
        <div>
            {contentDisplay}
           {/* {toggleEdit? <CarEditor cars={cars} setCars={setCars} handleToggle={handleToggle}/>:carsArr} */}
        </div>
    )
}
export default Home;
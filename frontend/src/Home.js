import React, {useEffect, useState} from 'react'
import CarCards from './CarCards'
import CarEditor from './CarEditor'
import Board from './components/Board'


function Home() {

    const [cars, setCars] = useState([])
    const [toggle, setToggle] = useState(true)


    useEffect((e) => {
        fetch('http://localhost:3000/cars')    
        .then(resp => resp.json())
        .then(data => setCars(data))
      }, [])
    
    
    const carsArr = cars.map((cars) => {
        return <CarCards
        key={cars.id}
        {...cars}
        />
    })

    return (
        <div>
           {toggle? <CarEditor/>:carsArr}
        </div>
    )
}
export default Home;
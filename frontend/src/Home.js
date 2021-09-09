import React, {useEffect, useState} from 'react'
import CarCards from './CarCards'
import CarEditor from './CarEditor'
import Board from './components/Board'
import Content from './Content'
import Sidebar from './Sidebar'


function Home() {

    const [cars, setCars] = useState([])
    const [toggleEdit,setToggleEdit]=useState(false)
    const [displayCar,setDisplayCar]=useState({})

  


    function handleEdit(){
        setToggleEdit(!toggleEdit);
    }
    

    function handleDisplay(id){
        const findCar = cars.find(cars => cars.id === id)
        setDisplayCar(findCar);
        console.log("home displaycar",displayCar)
       }


    useEffect((e) => {
        fetch('http://localhost:3000/cars')    
        .then(resp => resp.json())
        .then(data => setCars(data))
      }, [])

    
    const contentDisplay = cars.map((cars) => {
        return   <CarCards 
        key={cars.id}
        {...cars}
        cars={cars}
        toggleEdit={toggleEdit}
        setToggleEdit={setToggleEdit}
        handleEdit={handleEdit}
        handleDisplay={handleDisplay}
        

        
    />
    
    })

    


    return (
        <div>
            <Content 
                contentDisplay={contentDisplay} 
                cars={cars} 
                setCars={setCars} 
                handleEdit={handleEdit} 
                toggleEdit={toggleEdit} 
                setToggleEdit={setToggleEdit}
                displayCar={displayCar}

                />
            <Sidebar 
                contentDisplay={contentDisplay}
                handleDisplay={handleDisplay}
                />
        </div>
    )
}
export default Home;
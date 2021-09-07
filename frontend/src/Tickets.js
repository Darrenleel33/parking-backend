import React, {useState, useEffect} from 'react'
import TicketCards from './TicketCards'

function Tickets() {

    const [tickets, setTickets] = useState([])
    const [loadingTickets, setLoadingTickets] = useState(true)


    useEffect((e) => {
        fetch('http://localhost:3000/tickets')    
        .then(resp => resp.json())
        .then(data => {
            setTickets(data)
            setLoadingTickets(false)
        })
      }, [])

    

  
  
  return (
        <div>
            tickets
        </div>
    )
}

export default Tickets
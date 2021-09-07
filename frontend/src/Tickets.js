import React, {useState, useEffect} from 'react'
import TicketCards from './TicketCards'

function Tickets() {

    const [tickets, setTickets] = useState([])
 


    useEffect((e) => {
        fetch('http://localhost:3000/tickets')    
        .then(resp => resp.json())
        .then(data => {
            setTickets(data)
        })
      }, [])

      const ticketArray = tickets.map((tickets) => {
        return  <TicketCards 
        key={tickets.id}
        {...tickets}  
    />
      })

  console.log(tickets)
  
  return (
        <div>
            <h3>Parking Receipt Log</h3>
            {ticketArray}
        </div>
    )
}

export default Tickets
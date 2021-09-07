import React, {useState, useEffect} from 'react'
import TicketCards from './TicketCards'

function Tickets() {

    const [tickets, setTickets] = useState([])


    useEffect((e) => {
        fetch('http://localhost:3000/tickets')    
        .then(resp => resp.json())
        .then(data => setTickets(data))
      }, [])

    console.log (tickets)
    const ticketsArr = tickets.map((ticket) => {
        return <TicketCards
        key={ticket.id}
        {...ticket}
     
        />
    })

    return (
        <div>
            {ticketsArr}
        </div>
    )
}

export default Tickets
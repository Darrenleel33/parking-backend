
import React, { useState } from 'react'


function TicketCards({id, tickets, hours, car_id, date, paid, days}) {






let check = ({paid}=true)? "No" : "Yes"

    return (
     <div >
            <div >
                <h3>Parking Receipts # {id} </h3>

                <h5>Date: {date}</h5>
                <h5>Car ID# {car_id}</h5>
                <h5>Number of {hours} hours parked</h5>
                <h5>Number of {days} days parked</h5>
                <h5>Paid:{check}</h5>
               
                <button >Edit Ticket</button>
                <button >Remove</button>
            </div>
    
    </div>
    )
}

export default TicketCards
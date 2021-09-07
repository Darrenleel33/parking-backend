import { Card } from '@material-ui/core'
import React from 'react'
import dateFormat from 'dateformat';

function TicketCards({id, tickets, hours, car_id, date, paid, days}) {

let check = ({paid}=true)? "No" : "Yes"

    return (
     <div >
            <div >
                <h2>Parking Receipts #{id} </h2>

                <h4>Date:{date}</h4>
                <h4>Car ID#{car_id}</h4>
                <h4>Number of {hours} hours parked</h4>
                <h4>Number of {days} days parked</h4>
                <h4>Paid:{check}</h4>
               
                <button >Remove</button>
            </div>
    
    </div>
    )
}

export default TicketCards
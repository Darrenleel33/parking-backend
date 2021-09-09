
import React, { useState } from 'react'


function TicketCards({id, tickets, date, hours, car_id, paid, days}) {


function changePaid(){
    return !paid
    //need to send request to backend to change boolean
}

//add a new ticket

// add car name in serializer

// do some math for price of receipts

// const chargeHourly = 10 + 3*{hours}
// const chargeDaily = 35


    return (
     <div >
            <div >
                <h4>Parking Receipts # {id} </h4>
               
                <span>
                <h5>Date: {date} </h5>
                <h5>Car ID# {car_id}</h5>
                <h5>Number of {hours} hours parked</h5>
                <h5>Number of {days} days parked</h5>
                <h5>Paid:{paid?"yes":"no"}</h5>
                {/* <h5>$ {days===0 ? {chargeHourly}  : {chargeDaily} }</h5> */}
                </span>
               
                {/* <button >Edit Ticket</button> */}
                {/* <button onClick={changePaid()}>{paid? "Mark as Unpaid": "Mark as Paid"}</button> */}
            </div>
    
    </div>
    )
}

export default TicketCards
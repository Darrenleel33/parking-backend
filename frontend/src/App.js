
import './App.css';
import Home from './Home';
import Tickets from './Tickets';
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Board from './components/Board'
import Card from './components/Card'
import AddCarForm from './AddCarForm';
import Statistic from './Statistic';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
 
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };
  
  return (
    <div>
 
    <Router>
      <div>
        <nav>
       
            
              <Link style={linkStyle} to="/">Home</Link>
            
              <Link style={linkStyle} to="/addCarForm">Add a New Car into Parking Lot</Link>
          
              <Link style={linkStyle} to="/tickets">List of Tickets</Link>
           
              <Link style={linkStyle} to="/stats">Statistic</Link>
            
        
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/addCarForm">
            <AddCarForm />
          </Route>
          <Route path="/tickets">
            <Tickets/>
          </Route>
          <Route path="/stats">
            <Statistic/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
   
  );
}




export default App

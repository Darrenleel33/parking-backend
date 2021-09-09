
import './App.css';
import Home from './Home';
import Tickets from './Tickets';
import React from "react";
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

function App() {

  
  return (
    <div>

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addCarForm">Add a New Car into Parking Lot</Link>
            </li>
            <li>
              <Link to="/ticks">List of Tickets</Link>
            </li>
            <li>
              <Link to="/stats">Statistic</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/addCarForm">
            <AddCarForm />
          </Route>
          <Route path="/ticks">
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

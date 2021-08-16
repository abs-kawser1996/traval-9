import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import React, { createContext } from "react";
import { useState } from "react";
import Header from './Components/Header/Header'
import Booking from "./Components/Booking/Booking";


export const MyContext =createContext();



function App() {
  const[info,setInfo]=useState({}); 

  
  return (
 <MyContext.Provider value={[info,setInfo]}> 

    <Router> 
      <Header></Header>
      <Switch>

        <Route exact path="/"> 
        <Home></Home>
        </Route>
        
        <Route exact path="/booking">
           <Booking>
            </Booking> 
            
        </Route>
        
      </Switch>
    </Router>
    </MyContext.Provider>
  );
}

export default App;

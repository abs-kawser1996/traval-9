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



export const MyContext =React.createContext();



function App() {
  const[info,setInfo]=useState({}); 

  
  return (
 <MyContext.Provider value={[info,setInfo]}> 
    <Router> 
      <Switch>

        <Route> 
        <Home path="/home"></Home>
        </Route>
        
        
      </Switch>
    </Router>
    </MyContext.Provider>
  );
}

export default App;

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
import Login from "./Components/Login/Login";


export const MyContext =createContext();



function App() {
  const[info,setInfo]=useState({}); 

  
  return ( 
<div className="MainContainer"> 
 <MyContext.Provider value={[info,setInfo]}> 

    <Router> 
      <Switch>
                     
                      
                        <Route exact path="/">
                        <Header></Header>
                        
                        <div className="app__bg1"> 
                        <Home></Home>
                        </div>
                        </Route>
        

                                  <Route exact path="/booking">
                                  <Header></Header>
                                  <div className="app__bg1">
                                      <Booking>
                                       </Booking>
                                       </div> 
                                        </Route>
                                        

                                                              <Route exact path="/login">
                                                                <Login></Login>
                                                               </Route>
      </Switch>
    </Router>

    
    {/* <Booking>
            </Booking>  */}
            
    </MyContext.Provider>
    </div>
  );
}

export default App;

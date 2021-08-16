import React, {useContext}from 'react';
// import { Card } from 'react-bootstrap';

import Cards from "../Card/Cards";
import "./Home.css"
import places from '../../FakeData/Place'
import {MyContext} from '../../App'

const Home = () => {
  const [info,setInfo]=useContext(MyContext);
  console.log(info);
 


// const info=useContext(MyContext);


    // console.log(places);
    return (
        <div className="main-container">
            
            
        {/* button a click korla data dakhanor jonno*/}
          { 
            Object.keys(info).length?
            <div className="info-part">
                <p>{info.name}</p>
                <p>{info.description}</p>
            
            </div> :'' 
          }

            <div className="cads">

          {
              places.map(placeInfo => (

          <Cards place={placeInfo} ></Cards> 

              ))
          }
          </div>

             
          
            
        </div>
    );

};

export default Home;
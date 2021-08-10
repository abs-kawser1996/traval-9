import React, {useContext}from 'react';
// import { Card } from 'react-bootstrap';
import Header from '../Header/Header';
import Cards from "../Card/Cards";
import "./Home.css"
import places from '../../FakeData/Place'
import MyContext from '../../App'

const Home = () => {
//   const [info,setInfo]=useContext(MyContext);
    


const info=useContext(MyContext);
console.log(info);

    // console.log(places);
    return (
        <div className="main-container">
            <Header></Header>



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
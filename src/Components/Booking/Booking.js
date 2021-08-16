import React, { useContext } from 'react';
import { MyContext } from '../../App';

const Booking = () => {
    const [info,setInfo]=useContext(MyContext);
    console.log(info);

    return (
        <div className="container">
            <main> 
           <p className="info-part">
               {
               info.description
               }
               </p>
               </main>

        </div>

         
    );
};

export default Booking;
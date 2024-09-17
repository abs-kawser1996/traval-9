import React, { useContext } from 'react';
import { MyContext } from '../../App';
import './Booking.css';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


















const Booking = () => {
    const [info, setInfo] = useContext(MyContext);
    console.log(info);
    let history = useHistory();

    const classes = useStyles();


    function handleBooking (PlaceInformation){
        setInfo(PlaceInformation)
        history.push("/login"); 
        console.log('ok --');   
      }







    return (
        <div className="Main-container">

            <div className="info-p">
                <p>
                    {
                        info.description
                    }

                </p>
            </div>

            <div className="from">
                <label for="origin">Origin</label>
                <br />
                <input type="text" />
                <br />
                <label for="origin">Destination</label>
                <br />
                <input type="text" value={info.name} />
                <br />
                <br />
                {/* <label for="origin">From</label> */}

                <div className="date-field">


                    <div className="first-date">
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="From"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </div>

                    <div className="second-date">
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="TO"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /> 
                      
                      
                        </form>
                        <br />
                        
                        <button onClick={handleBooking}  className=" booked btn btn-warning">Booking</button>
                        
                    </div>

                </div>

            </div>



        </div>


    );
};

export default Booking;
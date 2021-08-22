import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MyContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


//{place}
const Cards = (props) => {
  const classes = useStyles();

  const [info, setInfo] = useContext(MyContext);
  let { image, title, description } = props.place;
  // console.log(image,title,description);
  // console.log(place);
  


  
  //showing place information
  function handleClick(PlaceInformation) {
    setInfo(PlaceInformation)
    // history.push("/login");

  }


 



  // 
  const truncateString = (string = '', maxLength = 50) =>
    string.length > maxLength
      ? `${string.substring(0, maxLength)}…`
      : string






return (


<div className="" style={{ marginLeft: "50px" }}>

  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {
            truncateString(description, 40)
          }
        </Typography>

      </CardContent>
    </CardActionArea>
    <CardActions>

      <Button onClick={() => handleClick(props.place)} size="small" color="primary">
        Show data
      </Button>

      <Link to="/booking">
          
        <Button onClick={() => handleClick(props.place)} size="small" color="primary">
          booking
        </Button>
      </Link>

    </CardActions>
  </Card>

</div>
);
};

export default Cards;

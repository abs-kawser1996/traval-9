import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  let {image,title,description} = props.place;
  
// console.log(image,title,description);


    const classes = useStyles();
    // console.log(place);


  function handleClick(ty){
        console.log(ty);
  }


// 
const truncateString = (string = '', maxLength = 50) => 
  string.length > maxLength 
    ? `${string.substring(0, maxLength)}…`
    : string






    return (
       

      <div onClick={()=>handleClick (props.place)} style={{marginLeft:"50px"}}>
                      
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
               truncateString(description,40)
            }
          
            {}

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          
        </Button>
        <Button size="small" color="primary">
          booking
        </Button>
      </CardActions>
    </Card>
   
        </div>
    );
};

export default Cards;

import React from 'react';
import './LandingComponent.css';
import Header from './Header'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: 900,
    fontColor:red
  },
  pos: {
    marginBottom: 12,
  },
});

const Landing = () => {

  const classes = useStyles();
  
  return (
    <div className="App">
      {Header()}

    <div className='background'></div>

    <div>
      <h1>"Wisdom to Learn"</h1>
      <h3>Be a part of our "Holistic Learning"</h3>
      <p>Viveka is An Interactive, Activity Driven, Experiential Learning Platform for Rural & Urban Students</p>
    </div>

    <div className='card'>
      <div className='card-item1'>
      <Card  className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" color="textSecondary" component="h2" gutterBottom>
        Rich Content
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
        Interactive, Multi-lingual,
        </Typography>
        <Typography variant="body2" component="p">
        Customisable
        </Typography>
      </CardContent>
     
    </Card>
      </div>
    
    <div className='card-item2'>
    <Card  className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Activities
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
        Analyse, experiment, examine
        <br/>
         on real-world problem
        </Typography>
        
      </CardContent>
     
    </Card>
    </div>
    
    <div className='card-item3'>
    <Card  className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Interactive
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
        Interactive animations, On spot
        <br/> QA sessions
        </Typography>
        
      </CardContent>
     
    </Card>
    </div>
    
    </div>
    <div className='footer'>
      <h3>Developed by Ramakrishna Mission, Shivanahalli, Bengaluru, Bharat</h3>
    </div>
     
    </div>
  );
}

export default Landing;

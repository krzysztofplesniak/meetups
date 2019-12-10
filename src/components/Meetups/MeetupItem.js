import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  card: {
    // width:350,
    // height: 325,
    //padding: '25px',
    background: 'linear-gradient(451deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    
  },
  media: {
    height: 150,
  },
});

export const MeetupItem = ({ meetup }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image='/static/images/cards/contemplative-reptile.jpg' title={meetup.title} />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {meetup.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
            <Button size='small' color='primary'>
              Description...
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};


MeetupItem.propTypes = {
  meetup:  PropTypes.object.isRequired 
}
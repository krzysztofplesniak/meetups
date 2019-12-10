import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import Meetups from './Meetups';
import { makeStyles } from '@material-ui/core/styles';
import { ErrorLog } from '../Helper/ErrorLog';
import { Loading } from '../Helper/Loading';

//import { mergeClasses } from '@material-ui/styles';

const MeetupList = () => {
  const api_URL = 'http://localhost:5000/meetups';

  const [loading, setLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);
  const [searchMeetup, setSearchMeetup] = useState('');

  const getMeetupsList = async () => {
    setLoading(true);

    const response = await fetch(api_URL);
    const meetupsList = await response.json();
    
    const filterMeetupsList = meetupsList.filter((meetup) => {
      return  meetup.desc.includes(searchMeetup);
    });
      
    setMeetups(filterMeetupsList);
    setLoading(false);
  };

  useEffect(() => {
    getMeetupsList();
    // eslint-disable-next-line
  }, [searchMeetup]);

  const onChangeSearchInput = (event) => {
    setSearchMeetup(event.target.value);
  };

  const classes = makeStyles((theme) => ({
    paper: {
      //padding: 12,
      textAlign: 'align',
      color: theme.palette.text.secondary,
    },
  }));

  return (
    <div className='container'>
      <>
        <Paper className={classes.paper}>
          <Typography variant='h5' component='h3'>
            These are your meetups!
          </Typography>
          <Typography component='p'>
            You can choose what you want: search meetups, share and mark meetup "Like", filter by topic, search by date, so on and so forth
          </Typography>
          <TextField className='searchTextField' margin='normal' placeholder='Search for Meetup'
          onChange={onChangeSearchInput} value={searchMeetup} />
          {loading ? (
            null
            //<Loading />
          ) : (
            <>
              {meetups.length > 0 ? (
                <Grid container direction='row' justify='center' alignItems='center' spacing={1}>
                  <Meetups meetups={meetups} />
                </Grid>
              ) : (
                <ErrorLog componet='MeetupList.js' errorMessage='Brak zaczytanych meetupów z backendu' />
              )}
            </>
          )}
        </Paper>
      </>
    </div>
  );
};

export default MeetupList;

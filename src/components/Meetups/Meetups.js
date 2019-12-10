import React from 'react';
import { ErrorLog } from '../Helper/ErrorLog';
import { MeetupItem } from './MeetupItem';
import PropTypes from 'prop-types';

const Meetups = ({ meetups = null }) => {
  return (
    <>
      {meetups ? (
        meetups.map((meetup) => <MeetupItem key={meetup.id} meetup={meetup} />)
      ) : (
        <ErrorLog componet='Meetups.js' errorMessage='Brak elementow do wyświetlenia w componencie Meetups.js' />
      )}
    </>
  );
};

export default Meetups;

Meetups.propTypes = {
  meetups:  PropTypes.array.isRequired 
}
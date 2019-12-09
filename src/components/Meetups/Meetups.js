import React from 'react';
import { ErrorLog } from '../Helper/ErrorLog';
import { Meetup } from './Meetup';

const Meetups = ({ meetups = null }) => {
  return (
    <>
      {meetups ? (
        meetups.map((meetup) => <Meetup key={meetup.id} meetup={meetup} />)
      ) : (
        <ErrorLog componet='Meetups.js' errorMessage='Brak elementow do wyświetlenia w componencie Meetups.js' />
      )}
    </>
  );
};

export default Meetups;

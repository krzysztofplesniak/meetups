import React from 'react';
import NavBarSearchBadge from './components/Navbar/NavBarSearchBadge';
//import NavBar from "./components/Navbar/NavBar";
import MeetupList from './components/Meetups/MeetupList';

import './App.css';

const App = () => {
  return (
    <>
      <NavBarSearchBadge />
      <MeetupList />
    </>
  );
};

export default App;

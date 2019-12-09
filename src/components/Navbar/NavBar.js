import React from 'react';
import AppBar from '@material-ui/core';
import Typography from '@material-ui/core';
import Toolbar from '@material-ui/core';

const NavBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h4' color='inherit'>
            Meetup wizard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

import React from 'react';
import PropTypes from 'prop-types';

export const ErrorLog = ({ component, errorMessage }) => {
  console.log(component, ' ', errorMessage);
  return <>{null}</>;
};

ErrorLog.propTypes = {
  component: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired
}

ErrorLog.defaultProps = {
  component: 'ErrorLog.js',
  errorMessage: 'Błąd składni, zobacz czy podany jest błąd w komponencie'
}
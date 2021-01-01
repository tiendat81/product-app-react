import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

Loading.propTypes = {};

function Loading(props) {
  return (
    <CircularProgress
      style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    />
  );
}

export default Loading;

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

Footer.propTypes = {};

function Footer(props) {
  return (
    <Box textAlign="center" mt="2rem" mb="2rem">
      © 2020 - Sản phẩm demo
    </Box>
  );
}

export default Footer;

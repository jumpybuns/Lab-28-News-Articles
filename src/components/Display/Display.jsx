import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ fgColor, bgColor, text }) => {
  <div style={{ backgroundColor: bgColor, width: '50rm', height: '50rem' }}>
    <p style={{ color: fgColor, fontSize: '5rem' }}>{text}</p>
  </div>;
};

Display.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Display;

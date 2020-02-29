import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ icon, onClick }) => (
  <button type="button" onClick={onClick}>{ icon }</button>
);

Button.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,

};

export default Button;

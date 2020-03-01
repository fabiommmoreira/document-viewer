import React from 'react';
import styled from 'styled-components';

import { IButton } from '../../interfaces';

const StyledButton = styled.button`
  height: 3rem;
  width: 3rem;
  border: none;
  outline: none;
  cursor:  ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

const Button = ({ children, onClick, disabled }) => (
  <StyledButton type="button" disabled={disabled} onClick={onClick}>{ children }</StyledButton>
);

Button.propTypes = IButton;

export default Button;

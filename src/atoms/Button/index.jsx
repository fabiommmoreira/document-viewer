import React from 'react';
import styled from 'styled-components';

import { IButton } from '../../interfaces';

const StyledButton = styled.button`
  height: 3rem;
  width: 3rem;
  border: none;
  background: none;
  outline: none;
  cursor:  ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

const Button = ({
  children, onClick, disabled, testId = 'button',
}) => (
  <StyledButton type="button" disabled={disabled} onClick={onClick} data-testid={testId}>{ children }</StyledButton>
);

Button.propTypes = IButton;

export default Button;

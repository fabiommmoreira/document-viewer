import React from 'react';
import styled from 'styled-components';

import { ITopBar } from '../../interfaces';

const StyledBar = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 5px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  padding: 0px 0.5rem;
  background: rgb(255, 255, 255);
`;

const TopBar = ({ children }) => (
  <StyledBar>{ children }</StyledBar>
);

TopBar.propTypes = ITopBar;

export default TopBar;

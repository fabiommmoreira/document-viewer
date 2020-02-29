import React from 'react';
import { ITopBar } from '../../interfaces';

const TopBar = ({ children }) => (
  <div>{ children }</div>
);

TopBar.propTypes = ITopBar;

export default TopBar;

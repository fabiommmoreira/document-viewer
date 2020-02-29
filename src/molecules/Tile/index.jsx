import React from 'react';

import { ITile } from '../../interfaces';


const Tile = ({ caption, thumbnail }) => (
  <div>
    { caption }
  </div>
);

Tile.propTypes = ITile;

export default Tile;

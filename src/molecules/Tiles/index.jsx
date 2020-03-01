import React from 'react';
import styled from 'styled-components';

import Tile from '../Tile';
import { ITiles } from '../../interfaces';

const TileList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

const Tiles = ({ entries }) => (
  <TileList>
    { entries.map((entry) => {
      const { name: caption, files } = entry;
      const [thumbnail] = files[0].thumbnails;

      return <Tile caption={caption} thumbnail={thumbnail} />;
    }) }
  </TileList>
);

Tiles.propTypes = ITiles;

export default Tiles;

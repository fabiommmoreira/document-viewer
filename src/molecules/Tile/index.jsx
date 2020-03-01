import React from 'react';
import styled from 'styled-components';

import Caption from '../../atoms/Caption';
import Thumbnail from '../../atoms/Thumbnail';
import { ITile } from '../../interfaces';

const TileWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 0 auto;
  margin: 16px 32px;
  cursor: pointer;
`;

const Tile = ({ caption, thumbnail, onClick }) => (
  <TileWrapper role="button" onClick={onClick}>
    <Thumbnail thumbnail={thumbnail} alt={caption} />
    <Caption text={caption} />
  </TileWrapper>
);

Tile.propTypes = ITile;

export default Tile;

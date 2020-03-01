import React from 'react';
import styled from 'styled-components';

import { IThumbnail } from '../../interfaces';

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Thumbnail = ({ thumbnail: { url, height, width }, alt }) => (
  <ImageContainer>
    <img src={url} alt={alt} height={height} width={width} />
  </ImageContainer>
);

Thumbnail.propTypes = IThumbnail;

export default Thumbnail;

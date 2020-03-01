import React from 'react';
import styled from 'styled-components';

import { ICaption } from '../../interfaces';

const StyledCaption = styled.h1`
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 0 auto;
  padding-top: 20px;
  color: rgba(0, 0, 0, 0.85);
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Caption = ({ text }) => (
  <StyledCaption>
    { text }
  </StyledCaption>
);

Caption.propTypes = ICaption;

export default Caption;

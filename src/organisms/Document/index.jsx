import React from 'react';
import styled from 'styled-components';

import TopBar from '../../atoms/TopBar';
import Tiles from '../../molecules/Tiles';
import { ReactComponent as Logo } from '../../assets/sketch-logo.svg';
import { ReactComponent as Separator } from '../../assets/separator.svg';
import { IDocument } from '../../interfaces';

const StyledLogo = styled(Logo)`
  padding: 0 12px;
`;


const Title = styled.span`
  padding: 0 12px;
`;

const Document = ({ name, artboards: { entries } }) => (
  <>
    <TopBar>
      <StyledLogo />
      <Separator />
      <Title>{ name }</Title>
    </TopBar>
    <Tiles entries={entries} />
  </>
);

Document.propTypes = IDocument;

export default Document;

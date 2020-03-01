import React, { useState } from 'react';
import styled from 'styled-components';

import TopBar from '../../atoms/TopBar';
import Tiles from '../../molecules/Tiles';
import Artboard from '../Artboard';
import { ReactComponent as Logo } from '../../assets/sketch-logo.svg';
import { ReactComponent as Separator } from '../../assets/separator.svg';
import { IDocument } from '../../interfaces';

const StyledLogo = styled(Logo)`
  padding: 0 12px;
`;


const Title = styled.span`
  padding: 0 12px;
`;

const Document = ({ name, artboards: { entries } }) => {
  const [openArtboardIdx, setOpenArtboardIdx] = useState(null);

  const closeArtboard = () => {
    setOpenArtboardIdx(null);
  };

  const previousArtBoard = () => {
    if (openArtboardIdx) {
      setOpenArtboardIdx(openArtboardIdx - 1);
    }
  };

  const nextArtBoard = () => {
    if (openArtboardIdx < entries.length - 1) {
      setOpenArtboardIdx(openArtboardIdx + 1);
    }
  };

  if (typeof openArtboardIdx === 'number') {
    return (
      <Artboard
        data={entries[openArtboardIdx]}
        handleClose={closeArtboard}
        handlePrevious={previousArtBoard}
        handleNext={nextArtBoard}
        index={openArtboardIdx + 1}
        total={entries.length}
      />
    );
  }

  return (
    <>
      <TopBar>
        <StyledLogo />
        <Separator />
        <Title>{ name }</Title>
      </TopBar>
      <Tiles entries={entries} openEntry={(idx) => setOpenArtboardIdx(idx)} />
    </>
  );
};

Document.propTypes = IDocument;

export default Document;

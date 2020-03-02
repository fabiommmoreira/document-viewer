import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import TopBar from '../../atoms/TopBar';
import Tiles from '../../molecules/Tiles';
import Artboard from '../Artboard';
import { ReactComponent as Logo } from '../../assets/sketch-logo.svg';
import { ReactComponent as Separator } from '../../assets/separator.svg';
import { getDocument } from '../../queries';
import { IDocument } from '../../interfaces';

const StyledLogo = styled(Logo)`
  padding: 0 12px;
`;


const Title = styled.span`
  padding: 0 12px;
`;

const Document = ({ match: { params: { id } } }) => {
  const [openArtboardIdx, setOpenArtboardIdx] = useState(null);
  const { loading, error, data } = useQuery(getDocument(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('data', data);
  const { share: { version: { document: { name, artboards: { entries } } } } } = data;


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

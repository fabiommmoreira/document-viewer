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

const PageWrapper = styled.div`
  background-color: rgb(249, 249, 249);
`;

const StyledLogo = styled(Logo)`
  padding: 0 12px;
`;

const Title = styled.span`
  color: rgb(0, 0, 0);
  padding: 0 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 500;
`;

const Document = ({ match: { params: { id } } }) => {
  const [openArtboardIdx, setOpenArtboardIdx] = useState(null);
  const { loading, error, data } = useQuery(getDocument(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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
    <PageWrapper>
      <TopBar>
        <StyledLogo />
        <Separator />
        <Title>{ name }</Title>
      </TopBar>
      <Tiles entries={entries} openEntry={(idx) => setOpenArtboardIdx(idx)} />
    </PageWrapper>
  );
};

Document.propTypes = IDocument;

export default Document;

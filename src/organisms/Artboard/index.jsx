import React from 'react';
import styled from 'styled-components';

import TopBar from '../../atoms/TopBar';
import Navigation from '../../molecules/Navigation';
import Button from '../../atoms/Button';
import { ReactComponent as Close } from '../../assets/close.svg';
import { ReactComponent as Separator } from '../../assets/separator.svg';
import { IArtboardPage } from '../../interfaces';

const StyledSeparator = styled(Separator)`
  margin: 0 4px;
`;

const Title = styled.span`
  padding: 0 12px;
`;

const Artboard = ({
  data, handleClose, handlePrevious, handleNext, index, total,
}) => {
  console.log('artboard data', data);
  return (
    <>
      <TopBar>
        <Button onClick={handleClose}><Close /></Button>
        <StyledSeparator />
        <Navigation
          current={index}
          total={total}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
        <Title>{ data.name }</Title>
      </TopBar>
      {data.name}
    </>
  );
};

Artboard.propTypes = IArtboardPage;

export default Artboard;

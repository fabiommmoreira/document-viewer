import React from 'react';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';

import TopBar from '../../atoms/TopBar';
import Navigation from '../../molecules/Navigation';
import Button from '../../atoms/Button';
import ResponsiveImg from '../../atoms/ResponsiveImg';
import { ReactComponent as Close } from '../../assets/close.svg';
import { ReactComponent as Separator } from '../../assets/separator.svg';
import { IArtboardPage } from '../../interfaces';

const PageWrapper = styled.div`
  height: 100%;
  background-color: rgb(249, 249, 249);
`;

const Content = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSeparator = styled(Separator)`
  margin: 0 4px;
`;

const Title = styled.span`
  padding: 0 12px;
`;

const Artboard = ({
  data, handleClose, handlePrevious, handleNext, index, total,
}) => {
  const { name, files } = data;

  const [ref, {
    x, y, width, height,
  }] = useDimensions();

  return (
    <PageWrapper>
      <TopBar>
        <Button onClick={handleClose}><Close /></Button>
        <StyledSeparator />
        <Navigation
          current={index}
          total={total}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
        <Title>{ name }</Title>
      </TopBar>
      <Content ref={ref}>
        <ResponsiveImg
          src={files[0].url}
          srcSet={`${files[0].url} 1x, ${files[0].url} 2x`}
          imgWidth={files[0].width}
          imgHeight={files[0].height}
          contentWidth={width}
          contentHeight={height}
          contentOffset={{ x, y }}
          alt={name}
        />
      </Content>
    </PageWrapper>
  );
};


Artboard.propTypes = IArtboardPage;

export default Artboard;

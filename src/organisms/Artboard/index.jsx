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
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 64px);
`;

const StyledSeparator = styled(Separator)`
  margin: 0 4px;
`;

const Title = styled.p`
  color: rgb(0, 0, 0);
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 25px;
  font-weight: 500;
  padding: 0px 8px 0px 1rem;
  overflow: hidden;
`;

const NavigationSection = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 0px;
`;

const FillSection = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  flex: 1 1 0px;
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
        <NavigationSection>
          <Button onClick={handleClose} testId="close-artboard"><Close /></Button>
          <StyledSeparator />
          <Navigation
            current={index}
            total={total}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        </NavigationSection>
        <Title>{ name }</Title>
        <FillSection />
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

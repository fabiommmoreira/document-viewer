import React from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import { INavigation } from '../../interfaces';

const StyledSpan = styled.span`
  color: rgba(0, 0, 0, 0.4);
`;

const NavigationWrapper = styled.div`
  white-space: nowrap;
`;

const Navigation = ({
  current, total, handlePrevious, handleNext,
}) => (
  <NavigationWrapper>
    <Button onClick={handlePrevious} disabled={current === 1}>
      <ArrowLeft />
    </Button>
    <StyledSpan>{`${current}/${total}`}</StyledSpan>
    <Button onClick={handleNext} disabled={current === total}>
      <ArrowRight />
    </Button>
  </NavigationWrapper>
);


Navigation.propTypes = INavigation;

export default Navigation;

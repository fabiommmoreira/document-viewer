import React from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import { INavigation } from '../../interfaces';

const StyledSpan = styled.span`
  color: rgba(0, 0, 0, 0.4);
`;

const Navigation = ({
  current, total, handlePrevious, handleNext,
}) => (
  <div>
    <Button onClick={handlePrevious} disabled={current === 1}>
      <ArrowLeft />
    </Button>
    <StyledSpan>{`${current}/${total}`}</StyledSpan>
    <Button onClick={handleNext} disabled={current === total}>
      <ArrowRight />
    </Button>
  </div>
);


Navigation.propTypes = INavigation;

export default Navigation;

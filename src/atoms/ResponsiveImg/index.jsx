import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { IResponsiveImg } from '../../interfaces';

const ImageWrapper = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const StyledImg = styled.img`
  display: ${(props) => (props.loading === 'true' ? 'none' : 'block')};
  width: 100%;
  height: 100%;
  margin-top: ${(props) => props.offset}px;
`;

const ResponsiveImg = ({
  src, srcSet, imgWidth, imgHeight, contentWidth, contentHeight, contentOffset, alt,
}) => {
  const [finalWidth, setFinalWidth] = useState(imgWidth);
  const [finalHeight, setFinalHeight] = useState(imgHeight);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [src]);

  useEffect(() => {
    setFinalWidth(imgWidth);
    setFinalHeight(imgHeight);
  }, [imgWidth, imgHeight]);

  useEffect(() => {
    const availableWidth = (contentWidth - contentOffset.x) * 0.9;
    const availableHeight = (contentHeight - contentOffset.y) * 0.9;

    if (finalWidth > availableWidth || finalHeight > availableHeight) {
      const ratioWidth = finalWidth / availableWidth;
      const ratioHeight = finalHeight / availableHeight;

      const biggestRatio = Math.max(ratioWidth, ratioHeight);

      if (biggestRatio > 1) {
        setFinalWidth(finalWidth / biggestRatio);
        setFinalHeight(finalHeight / biggestRatio);
      }
    }
  }, [contentWidth, contentHeight, finalWidth, finalHeight, contentOffset]);


  return (
    <ImageWrapper width={finalWidth} height={finalHeight}>
      <StyledImg
        src={src}
        srcSet={srcSet}
        onLoad={() => setLoading(false)}
        alt={alt}
        loading={loading.toString()}
        data-testid="responsive-img"
      />
    </ImageWrapper>
  );
};

ResponsiveImg.propTypes = IResponsiveImg;

export default ResponsiveImg;

import React from 'react';

import TopBar from '../../atoms/TopBar';
import Tiles from '../../molecules/Tiles';
import { IDocument } from '../../interfaces';

const Document = ({ name, artboards: { entries } }) => (
  <>
    <TopBar>{ name }</TopBar>
    <Tiles entries={entries} />
  </>
);

Document.propTypes = IDocument;

export default Document;

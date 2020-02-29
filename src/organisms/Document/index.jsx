import React from 'react';

import TopBar from '../../atoms/TopBar';
import Tile from '../../molecules/Tile';
import { IDocument } from '../../interfaces';

const Document = ({ name, artboards: { entries } }) => {
  console.log('{ name, entries }', { name, entries });

  return (
    <>
      <TopBar>{ name }</TopBar>
      <div>
        { entries.map((entry) => {
          const { name: caption, files } = entry;
          const [thumbnail] = files[0].thumbnails;

          return <Tile caption={caption} thumbnails={thumbnail} />;
        }) }
      </div>
    </>
  );
};

Document.propTypes = IDocument;

export default Document;

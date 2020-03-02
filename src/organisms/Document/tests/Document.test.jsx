import React from 'react';
import {
  render, act, wait, fireEvent, cleanup,
} from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import Document from '..';
import { getDocument } from '../../../queries';
import mockData from './documentMock.json';

const id = 'Y8wDMsdf';

const mocks = [
  {
    request: {
      query: getDocument(id),
    },
    result: {
      data: mockData,
    },
  },
];


const props = {
  match: {
    path: '/:id',
    url: '/Y8wDMsdf',
    isExact: true,
    params: {
      id,
    },
  },
};

describe('<Document />', () => {
  const renderComponent = () => render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Document {...props} />
    </MockedProvider>,
  );

  const { share: { version: { document: { artboards: { entries } } } } } = mockData;

  afterEach(cleanup);

  it('creates a tile for each artboard in the document', async () => {
    const { queryAllByTestId } = renderComponent();

    await wait(() => {
      const tiles = queryAllByTestId('tile');
      const tilesCount = tiles.length;
      const expectedTilesCount = entries.length;

      expect(tilesCount).toEqual(expectedTilesCount);
    });
  });

  it('open an arboard if the user clicks it\'s tile', async () => {
    const { getAllByTestId, getByTestId } = renderComponent();
    const targetTileIdx = 2;

    await wait(() => {
      const tiles = getAllByTestId('tile');
      const targetTile = tiles[targetTileIdx];
      const targetTileData = entries[targetTileIdx];

      fireEvent.click(targetTile);

      const artBoardImg = getByTestId('responsive-img');

      expect(artBoardImg).not.toBe(null);
      expect(artBoardImg.src).toBe(targetTileData.files[0].url);
    });
  });

  it('should navigate to the next arboard if next button is pressed', async () => {
    const { getAllByTestId, getByTestId } = renderComponent();
    const targetTileIdx = 2;
    const newTargetTileData = entries[targetTileIdx + 1];

    await wait(() => {
      const tiles = getAllByTestId('tile');
      const targetTile = tiles[targetTileIdx];

      fireEvent.click(targetTile);
    });

    act(() => {
      const nextBtn = getByTestId('next-arboard');
      fireEvent.click(nextBtn);
    });

    await wait(() => {
      const artBoardImg = getByTestId('responsive-img');
      expect(artBoardImg.src).toBe(newTargetTileData.files[0].url);
    });
  });

  it('should return to the document viewer if the close button is pressed', async () => {
    const { getAllByTestId, getByTestId, queryAllByTestId } = renderComponent();
    const targetTileIdx = 2;

    const TotalTilesCount = entries.length;

    await wait(() => {
      const tiles = getAllByTestId('tile');
      const tilesCount = tiles.length;
      const targetTile = tiles[targetTileIdx];

      expect(tilesCount).toEqual(TotalTilesCount);

      fireEvent.click(targetTile);
    });

    await wait(() => {
      const closeBtn = getByTestId('close-artboard');
      const tiles = queryAllByTestId('tile');
      const tilesCount = tiles.length;

      expect(tilesCount).toEqual(0);
      fireEvent.click(closeBtn);
    });

    await wait(() => {
      const tiles = queryAllByTestId('tile');
      const tilesCount = tiles.length;

      expect(tilesCount).toEqual(TotalTilesCount);
    });
  });
});

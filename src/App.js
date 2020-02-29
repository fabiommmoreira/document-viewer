import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Document from './organisms/Document';

const GET_DOCUMENT = gql`
  {
    share(shortId: "Y8wDM") {
      shortId
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_DOCUMENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('data', data);
  const { share: { version: { document: { name, artboards } } } } = data;

  return <Document name={name} artboards={artboards} />;
}

export default App;

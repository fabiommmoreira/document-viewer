import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import logo from './logo.svg';
import './App.css';

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Document from './organisms/Document';

const Homepage = () => (
  <div>
    add a document ID to the URL, f.e.
    <a href="http://localhost:3000/Y8wDM">Y8wDM</a>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/:id" component={Document} />
    </Switch>
  );
}

export default App;

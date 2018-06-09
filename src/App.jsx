import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <div className="title">
        <h1>Products Information</h1>
      </div>
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;

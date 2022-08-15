import React from 'react';
import Router from './routes';
import AppHeader from './components/shareds/AppHeader';

import './styles/vendors.scss';
import './styles/global.scss';

const App = () => (
  <div className="App">
    <main>
      <AppHeader />
      <p>App Works!</p>
      <Router />
    </main>
  </div>
);

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cards from './components/Cards';
import Movies from './pages/Home/Movies';

import Routes from './routes/routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cards from './components/Cards';
import AppProvider from './contexts/AppProvider';
import Movies from './pages/Home/Movies';

import Routes from './routes/routes';

const App = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppProvider>
    </>
  );
};

export default App;

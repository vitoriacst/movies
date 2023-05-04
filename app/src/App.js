import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./contexts/AppProvider";

import Routes from "./routes/routes";

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

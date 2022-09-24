import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = (props) => {
  const { children } = props;
  const [productCart, setProductCart] = useState(false);

  const providerValue = {
    productCart,
    setProductCart,
  };

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

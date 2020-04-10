import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux'; 

export const withReduxProvider = (WrappedComponent: React.FC, store: Store) => (props: any) => (
  <Provider store={store}>
    <WrappedComponent {...props}/>
  </Provider>
);

import React from 'react';
import routes from './routes'
import { Switch } from 'react-router-dom'
import RouteAndSubRoutes from './RouteAndSubRoutes'

import { BrowserRouter } from 'react-router-dom'  
import { Provider } from 'react-redux'

import App from './App';

import store, { persistor } from './state'
import { PersistGate } from 'redux-persist/integration/react'

const AppBase = () => {
  return (
    <div className="App">
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate
            loading="Loading..."
            persistor={persistor}
          >
            <BrowserRouter>
              <Switch> {
                routes.map(
                  (route, index) => 
                    <RouteAndSubRoutes key={index} {...route} />
                  )
              }
              </Switch>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </div>
  )
}

export default AppBase;

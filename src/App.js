import React from 'react';
import { Switch } from 'react-router-dom'

import { BrowserRouter } from 'react-router-dom'  
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './state'
import routes from './routes'
import RouteAndSubRoutes from './routes/RouteAndSubRoutes'

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

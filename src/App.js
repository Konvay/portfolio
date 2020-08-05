import React from 'react';
import { Switch } from 'react-router-dom'

import { BrowserRouter } from 'react-router-dom'  
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './state'
import routes from './routes'
import RouteAndSubRoutes from './routes/RouteAndSubRoutes'

import Header from './components/Header'
import Footer from './components/Footer'

import './styles/App.scss'

const AppBase = () => {
  return (
    <div className="App">
      <div class="site-wrapper">
        <React.StrictMode>
          <Provider store={store}>
            <PersistGate
              loading="Loading..."
              persistor={persistor}
            >
              <BrowserRouter>
                <Header />
                  <div class="site-content">
                    <Switch> {
                      routes.map(
                        (route, index) => 
                          <RouteAndSubRoutes key={index} {...route} />
                        )
                    }
                    </Switch>
                  </div>
                <Footer />
              </BrowserRouter>
            </PersistGate>
          </Provider>
        </React.StrictMode>
        </div>
    </div>
  )
}

export default AppBase;

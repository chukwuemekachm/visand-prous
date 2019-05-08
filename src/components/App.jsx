import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store/configureStore';
import NavBar from './organisms/NavBar/NavBar';
import Catalog from './templates/Catalog/Catalog';
import Footer from './molecules/Footer/Footer';
import GlobalStyles from './_settings/_global_styles';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact render={props => <Catalog {...props} />} />
          </Switch>
          <Footer />
          <GlobalStyles />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

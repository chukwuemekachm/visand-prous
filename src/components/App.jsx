import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store/configureStore';
import NavBar from './organisms/NavBar/NavBar';
import Catalog from './templates/Catalog/Catalog';
import Product from './templates/Product/Product';
import Login from './templates/Login/Login';
import Signup from './templates/Signup/Signup';
import Checkout from './templates/Checkout/Checkout';
import DefaultPrivateRoute from './organisms/PrivateRoute/PrivateRoute';
import DefaultGuestRoute from './organisms/GuestRoute/GuestRoute';
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
            <DefaultGuestRoute path="/signup" exact component={() => <Signup />} />
            <DefaultGuestRoute path="/login" exact component={() => <Login />} />
            <DefaultPrivateRoute path="/checkout" exact component={() => <Checkout />} />
            <Route path="/:productId" render={props => <Product {...props} />} />
            <Redirect to="/" />
          </Switch>
          <Footer />
          <GlobalStyles />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

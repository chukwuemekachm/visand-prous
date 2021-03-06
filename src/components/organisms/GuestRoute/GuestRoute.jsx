import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export function GuestRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        !isAuthenticated
          ? <Component {...props} />
          : <Redirect to="/" />
      )}
    />
  );
}

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, null)(GuestRoute);

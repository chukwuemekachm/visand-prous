import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ShoppingCart from '../../molecules/ShoppingCart/ShoppingCart';

import { getShippingRegions, getShippingTypes } from '../../../actions/shipping';
import toastr from '../../../helpers/toastr';

const Wrapper = styled.div``;

class Checkout extends Component {
  state = {};

  async componentDidMount() {
    try {
      const { getShippingRegions, getShippingTypes } = this.props;
      await Promise.all([
        getShippingRegions(),
        getShippingTypes(),
      ]);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { items } = this.props;
    console.log(items, 'props -----')
    return (<ShoppingCart items={items} />);
  }
}

export const mapStateToProps = state => ({
  items: state.cart.items,
});

export const mapDispatchToProps = dispatch => ({
  getShippingRegions: () => dispatch(getShippingRegions()),
  getShippingTypes: () => dispatch(getShippingTypes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

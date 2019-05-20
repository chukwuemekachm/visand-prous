import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PayPal from '../../molecules/PayPal/PayPal';
import OrderDeliveryForm from '../../molecules/OrderDeliveryForm/OrderDeliveryForm';

import { getShippingRegions, getShippingTypes } from '../../../actions/shipping';
import { createOrder, verifyOrderPayment } from '../../../actions/order';
import { color } from '../../_settings/_variables';
import toastr from '../../../helpers/toastr';

const Wrapper = styled.div`
  width: 30%;
  margin: auto;

  h2 {
    display: inline-block;
    color: ${color.CRIMSON};
    letter-spacing: .1em;
  }
`;

class Checkout extends Component {
  state = {
    shippingType: 1,
    shippingRegion: 2,
  };

  async componentDidMount() {
    try {
      const { getShippingRegions, getShippingTypes } = this.props;
      await Promise.all([
        getShippingRegions(),
        getShippingTypes(),
      ]);
      const interval = setInterval(() => {
        const element = window.document.querySelector('#paypal-button-container');
        if (element && paypal) {
          paypal.Buttons({
            createOrder: function(data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: window.localStorage.getItem('vs-order-amount') || '0.01'
                  }
                }]
              });
            },
            onApprove: function(data, actions) {
              return actions.order.capture().then(function({ id }) {
                verifyOrderPayment(id).then(() => {
                  toastr.success('Payment successful');
                  return window.history.back();
                });
              });
            }
          }).render('#paypal-button-container');
          clearInterval(interval);
        }
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = ({ target, value }) => {
    const property = target
      ? 'shippingRegion'
      : 'shippingType';
    return this.setState({
      [property]: target ? Number.parseInt(target.value) : value,
    });
  }

  handleOrder = async () => {
    try {
      const { createOrder } = this.props;
      const { shippingType } = this.state;
      await createOrder(shippingType);
      return toastr.success('Please proceed to pay for your order');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { shippingTypes, shippingRegions, orderId } = this.props;
    const { shippingRegion, shippingType } = this.state;
    return (
      <Wrapper>
        {
          orderId
            ? <PayPal />
            :  (<OrderDeliveryForm
                values={this.state}
                shippingTypes={shippingTypes}
                shippingRegions={shippingRegions}
                shippingType={shippingType}
                shippingRegion={shippingRegion}
                handleChange={this.handleChange}
                handleOrder={this.handleOrder}
              />)
          
        }
      </Wrapper>
    );
  }
}

export const mapStateToProps = state => ({
  shippingTypes: state.shipping.types,
  shippingRegions: state.shipping.regions,
  orderId: state.order.orderId,
});

export const mapDispatchToProps = dispatch => ({
  getShippingRegions: () => dispatch(getShippingRegions()),
  getShippingTypes: () => dispatch(getShippingTypes()),
  createOrder: shippingId => dispatch(createOrder(shippingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

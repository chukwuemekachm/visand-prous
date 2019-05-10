import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Wrapper = styled.div``;

class Product extends Component {
  state = {};

  render() {
    return (
      <Wrapper></Wrapper>
    );
  }
}

export const mapStateToProps = state => ({
  ...state,
});

export const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

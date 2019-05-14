import React, { Component } from  'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignupForm from '../../molecules/SignupForm/SignupForm';
import { authenticateUser } from '../../../actions/user';
import toastr from '../../../helpers/toastr';

const Wrapper = styled.div`
  width: 30%;
  margin: auto;
`;

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address1: '',
    city: '',
    region: '',
    postalCode: '',
    country: '',
    mobPhone: '',
  };

  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });
  
  handleSubmit = async () => {
    try {
      const { authenticateUser } = this.props;
      await authenticateUser(this.state);
      toastr.success('Your signup was successful');
    } catch (err) {
      console.log(err);
      toastr.error('An error occurred, please try again later.');
    }
  };

  render() {
    return (
      <Wrapper>
        <SignupForm
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

export const mapStateToProps = state => ({
  ...state
});

export const mapDispatchToProps = dispatch => ({
  authenticateUser: user => dispatch(authenticateUser(user, 'signup')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

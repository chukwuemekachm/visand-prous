import React, { Component } from  'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../../molecules/LoginForm/LoginForm';
import { authenticateUser } from '../../../actions/user';
import toastr from '../../../helpers/toastr';

const Wrapper = styled.div`
  width: 25%;
  margin: auto;
`;

class Login extends Component {
  state = {
    email: '',
    password: '',
    url: process.env.API_URL,
  };

  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });
  
  handleSubmit = async () => {
    try {
      const { authenticateUser } = this.props;
      const { email, password } = this.state;
      await authenticateUser({ email, password });
      toastr.success('Your login was successful');
    } catch (err) {
      toastr.error('An error occurred, please try again later.');
    }
  };

  render() {
    return (
      <Wrapper>
        <LoginForm
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
  authenticateUser: user => dispatch(authenticateUser(user, 'login')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, { Component } from  'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SubHeader from '../../atoms/SubHeader/SubHeader';
import Input from '../../atoms/Input/Input';
import Button, { ButtonSize, ButtonType, ButtonTheme } from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';

const Wrapper = styled.div`
  width: 30%;
  margin: auto;

  input {
    margin-bottom: 1em;
  }

  button {
    width: 80%;
    margin: auto;
  }
`;

class Login extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <SubHeader>Welcome To Visand Prous</SubHeader>
        <Input
          placeHolder="Email"
        />
        <Input
          placeHolder="Password"
        />
        <Button
          type={ButtonType.ROUNDED}
          // size={ButtonSize.LARGE}
        >
          Login
        </Button>
      </Wrapper>
    );
  }
}

export default Login;

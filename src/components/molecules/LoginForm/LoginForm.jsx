import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SubHeader from '../../atoms/SubHeader/SubHeader';
import Input from '../../atoms/Input/Input';
import Button, { ButtonType } from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';
import Error from '../../atoms/Error/Error';
import FaceBookLogin from '../../organisms/FaceBookLogin/FaceBookLogin';
import Flex from '../../_layouts/Flex';
import { color } from '../../_settings/_variables';

const Wrapper = styled.div`
  width: 100%;
  padding: 3em 1.5em;
  margin: 5em auto;
  box-sizing: border-box;

  h2 {
    display: inline-block;
    color: ${color.CRIMSON};
    letter-spacing: .1em;
    margin: 0em;
  }

  input {
    margin-top: 2em;
    padding: .7em 1em;
    border: .05em solid ${color.CRIMSON};
    border-radius: 3em;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    margin-top: 2em;
  }
`;


function LoginForm(props) {
  const {
    values: { email, password }, handleChange, handleSubmit, errors,
  } = props;
  return (
    <Wrapper>
      <Flex flexDirection="column">
        <SubHeader>Login</SubHeader>
        <Input
          placeHolder="Email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          type="text"
        />
        {
          errors.email && errors.email.length
            ? errors.email.map(error => (<Error key={error}>{error}</Error>))
            : ''
        }
        <Input
          placeHolder="Password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
          type="password"
        />
        {
          errors.password && errors.password.length
            ? errors.password.map(error => (<Error key={error}>{error}</Error>))
            : ''
        }
        <Button
          type={ButtonType.ROUNDED}
          handleClick={handleSubmit}
        >
            Login
        </Button>
        <Text>
          {"Don't have an account? "}
          <Link to="/signup">Signup</Link>
        </Text>
        <FaceBookLogin />
      </Flex>
    </Wrapper>
  );
}

LoginForm.propTypes = {
  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginForm;

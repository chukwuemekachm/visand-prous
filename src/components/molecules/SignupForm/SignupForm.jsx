import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SubHeader from '../../atoms/SubHeader/SubHeader';
import Input from '../../atoms/Input/Input';
import Button, { ButtonType } from '../../atoms/Button/Button';
import FaceBookLogin from '../../organisms/FaceBookLogin/FaceBookLogin';
import Text from '../../atoms/Text/Text';
import Flex from '../../_layouts/Flex';
import { color } from '../../_settings/_variables';

const Wrapper = styled.div`
  width: 100%;
  padding: 3em 1.5em;
  margin: 4em auto;
  box-sizing: border-box;

  h2 {
    display: inline-block;
    color: ${color.CRIMSON};
    letter-spacing: .1em;
  }

  input {
    margin-bottom: 2em;
    padding: .7em 1em;
    border: .05em solid ${color.CRIMSON};
    border-radius: 3em;
    box-sizing: border-box;
  }

  div[display=flex] > div[display=flex] span {
    width: 49%;
  }

  button {
    width: 100%;
    margin: auto;
  }

  div[display=flex] {
    width: 100%;
  }
`;


function SignupForm(props) {
  const {
    values: {
      email, password, name, address1, country, city,
      region, confirmPassword, postalCode, mobPhone,
    },
    handleChange, handleSubmit,
  } = props;
  return (
    <Wrapper>
      <Flex flexDirection="column">
        <SubHeader>Signup</SubHeader>
        <Flex justifyContent="space-between">
          <Input
            placeHolder="Name"
            name="name"
            value={name}
            handleChange={handleChange}
            required
            type="text"
          />
          <Input
            placeHolder="Email"
            name="email"
            value={email}
            handleChange={handleChange}
            required
            type="text"
          />
        </Flex>
        <Flex justifyContent="space-between">
          <Input
            placeHolder="Mobile Phone"
            name="mobPhone"
            value={mobPhone}
            handleChange={handleChange}
            required
            type="text"
          />
          <Input
            placeHolder="Address"
            name="address1"
            value={address1}
            handleChange={handleChange}
            required
            type="text"
          />
        </Flex>
        <Flex justifyContent="space-between">
          <Input
            placeHolder="City"
            name="city"
            value={city}
            handleChange={handleChange}
            required
            type="text"
          />
          <Input
            placeHolder="Postal Code"
            name="postalCode"
            value={postalCode}
            handleChange={handleChange}
            required
            type="text"
          />
        </Flex>
        <Flex justifyContent="space-between">
          <Input
            placeHolder="Region"
            name="region"
            value={region}
            handleChange={handleChange}
            required
            type="text"
          />
          <Input
            placeHolder="Country"
            name="country"
            value={country}
            handleChange={handleChange}
            required
            type="text"
          />
        </Flex>
        <Input
          placeHolder="Password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
          type="password"
        />
        <Input
          placeHolder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          required
          type="password"
        />
        <Button
          type={ButtonType.ROUNDED}
          handleClick={handleSubmit}
        >
            Signup
        </Button>
        <Text>
          {'Already have an account? '}
          <Link to="/login">Login</Link>
        </Text>
        <FaceBookLogin />
      </Flex>
    </Wrapper>
  );
}

SignupForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    mobPhone: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SignupForm;

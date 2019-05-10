import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/lib/fa';
import { IoCloseRound } from 'react-icons/lib/io';

import Icon from '../../atoms/Icon/Icon';
import Input from '../../atoms/Input/Input';
import { color, screenSizes } from '../../_settings/_variables';

const Wrapper = styled.span`
  width: 19em;
  padding: .14em 1em .22em 1em;
  display: inline-flex;
  align-items: center;
  border: none;
  border-radius: .1em;
  background-color: ${color.LAVENDER};
  margin: 0em 2em;
  color: ${color.DARK_GREY};

  span:last-child svg {
    cursor: pointer;
  }
  
  input, input::placeholder {
    color: ${color.DARK_GREY};
  }

  @media (max-width: ${screenSizes.TABLET}) {
    width: 80%;
    padding: .4em 1em;
    margin: 1.5em 0em 1em 0em;
  }

  @media (max-width: ${screenSizes.MOBILE}) {
    width: 100%;
    padding: .4em 1em;
    margin: 1.5em 0em 3em 0em;
    box-sizing: border-box;
  }
`;

function Search(props) {
  const {
    value, handleChange, handleClear, handleEnter,
  } = props;
  return (
    <Wrapper>
      <Icon>
        <FaSearch />
      </Icon>
      <Input
        value={value}
        handleChange={handleChange}
        placeHolder="search anything"
        handleEnter={handleEnter}
      />
      <Icon handleClick={handleClear}>
        <IoCloseRound />
      </Icon>
    </Wrapper>
  );
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleClear: PropTypes.func,
  handleEnter: PropTypes.func,
};

Search.defaultProps = {
  handleChange: () => true,
  handleClear: () => true,
  handleEnter: () => true,
};

export default Search;

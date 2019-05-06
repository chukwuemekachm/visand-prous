import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../../atoms/Icon/Icon';
import Input from '../../atoms/Input/Input';
import { color, fontWeight } from '../../_settings/_variables';

const Wrapper = styled.span`
  width: 19em;
  padding: .4em 1.3em;
  display: inline-flex;
  align-items: center;
  border: none;
  border-radius: 3em;
  background-color: ${color.DARK_GREY};
  margin: 0em 2em;

  i.ion-ios-close:before, .ion-ios-search:before {
    font-size: 1.3em;
    font-weight: ${fontWeight.BOLD};
  }

  i.ion-ios-close:before {
    cursor: pointer;
  }
  
  input, input::placeholder, span > i {
    color: ${color.WHITE};
  }
`;

const Search = ({ value, handleChange, handleClear }) => (
  <Wrapper>
    <Icon iconName="search" />
    <Input
      value={value}
      handleChange={handleChange}
      placeHolder="search anything"
    />
    <Icon iconName="close" onClick={handleClear} />
  </Wrapper>
);

Search.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleClear: PropTypes.func,
};

Search.defaultProps = {
  handleChange: () => true,
  handleClear: () => true,
};

export default Search;

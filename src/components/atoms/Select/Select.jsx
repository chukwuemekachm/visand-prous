import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaSort } from 'react-icons/lib/fa';

import Icon from '../Icon/Icon';
import { color, fontFamily, fontWeight } from '../../_settings/_variables';


const Wrapper = styled.span`
  width: 100%;
  padding: .31em .1em .21em 1em;
  border: .1em solid ${color.LAVENDER};
  border-radius: 2em;
  box-sizing: border-box;

  svg {
    position: relative;
    right: .1em;
  }
`;

Wrapper.Select = styled.select`
  font-size: 1em;
  width: 92%;
  border: none;
  background-color: transparent;
  color: ${color.DIM_GREY};
  font-family: ${fontFamily.OPEN_SANS};
  font-weight: ${fontWeight.BASE};
  outline: none;
  line-height: 2em;
  -moz-appearance: none;
  -webkit-appearance: none;
  z-index: 10;
`;

Wrapper.Option = styled.option``;

const Select = ({ options, handleChange }) => (
  <Wrapper>
    <Wrapper.Select onChange={handleChange}>
      {
        options
          .map(({ value, display }) => (
            <Wrapper.Option
              key={value}
              value={value}
            >
              {display}
            </Wrapper.Option>
          ))
      }
    </Wrapper.Select>
    <Icon>
      <FaSort />
    </Icon>
  </Wrapper>
);

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      display: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;

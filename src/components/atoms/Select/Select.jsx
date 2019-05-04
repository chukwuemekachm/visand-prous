import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import { color, fontFamily, fontWeight } from '../../_settings/_variables';


const Wrapper = styled.span`
  padding: .8em .1em .7em 1em;
  border: .1em solid ${color.LAVENDER};
  border-radius: 2em;

  i.icon {
    position: relative;
    right: 1em;
    top: .1em;
  }
`;

Wrapper.Select = styled.select`
  font-size: 1em;
  width: 5.5em;
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

const Select = ({ options }) => (
  <Wrapper>
    <Wrapper.Select>
      {
        options.map(option => (<Wrapper.Option value={option}>{option}</Wrapper.Option>))
      }
    </Wrapper.Select>
    <Icon iconName="arrow-down" />
  </Wrapper>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TiPlus, TiMinus } from 'react-icons/lib/ti';

import Title from '../../atoms/Title/Title';
import Icon from '../../atoms/Icon/Icon';
import { color } from '../../_settings/_variables';
import Flex from '../../_layouts/Flex';

const Wrapper = styled.section`
   span {
     font-size: 1.5em;
     font-weight: 900;
   }
`;

Wrapper.Display = styled.span`
  margin: 0em .3em 1.2em .3em;
  font-family: sans-serif;
  padding: .3em .8em;
  border: .05em solid ${color.LAVENDER};
  border-radius: 2em;
`;

function Quantity(props) {
  const {
    handleIncrement, handleDecrement, quantity, showQuantity,
  } = props;
  return (
    <Wrapper>
      {
        showQuantity
          ? <Title color={color.DARK_GREY}>Quantity</Title>
          : ''
      }
      <Flex alignItems="baseline">
        <Icon backGround handleClick={() => handleDecrement()}>
          <TiMinus />
        </Icon>
        <Wrapper.Display>{quantity}</Wrapper.Display>
        <Icon backGround handleClick={() => handleIncrement()}>
          <TiPlus />
        </Icon>
      </Flex>
    </Wrapper>
  );
}

Quantity.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  showQuantity: PropTypes.bool,
};

Quantity.defaultProps = {
  showQuantity: true,
};

export default Quantity;

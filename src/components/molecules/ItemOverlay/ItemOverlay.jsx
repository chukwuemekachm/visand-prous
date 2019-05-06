import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import Title from '../../atoms/Title/Title';
import Button, { ButtonType } from '../../atoms/Button/Button';
import Price, { PriceSize } from '../../atoms/Price/Price';
import Select from '../../atoms/Select/Select';
import Flex from '../../_layouts/Flex';

const Wrapper = styled.figure.attrs({
  className: 'vs-item-overlay',
})`
  margin: 0;
  width:  23%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.2);
  padding: 2em 0;
  text-align: center;

  button {
    font-size: .8em;
    margin-left: 1em;
  }
`;

const ItemOverlay = () => {
  // const { name, price, attributes: { Color, Size } } = item;
  const options = ['S', 'M', 'L', 'XL', 'XXL'];
  return (
    <Wrapper>
      <Flex
        flexDirection="column"
        justifyContent="space-around"
        alignItems="stretch"
      >
        <Title>Merik Shirt</Title>
        <Price size={PriceSize.LARGE}>12.00</Price>
        <Flex justifyContent="space-around">
          <Select options={options} />
          <Button type={ButtonType.ROUNDED}>Buy now</Button>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

ItemOverlay.propTypes = {
  // item: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   price: PropTypes.string.isRequired,
  // }).isRequired,
};

export default ItemOverlay;

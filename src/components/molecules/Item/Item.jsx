import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Image from '../../atoms/Image/Image';
import Title from '../../atoms/Title/Title';
import Button, { ButtonType } from '../../atoms/Button/Button';
import Price from '../../atoms/Price/Price';

const Wrapper = styled.figure.attrs({
  className: 'vs-item',
})`
  margin: .5em 0em;
  width:  23%;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.2);
  padding: 2em 0;
  text-align: center;
  align-items: center;

  img {
    width: auto;
    height: 15em;
  }

  h3 {
    margin-top: 1.8em;
  }

  button {
    font-size: .8em;
  }
`;

const Item = ({ item }) => {
  const { thumbnail, name, price } = item;
  const isLow = Number.parseFloat(price) < 15.00;
  return (
    <Wrapper>
      <Image src={thumbnail} />
      <Title>{name}</Title>
      {
        isLow
          ? <Price>{price}</Price>
          : <Button type={ButtonType.ROUNDED}>Buy now</Button>
      }
    </Wrapper>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;

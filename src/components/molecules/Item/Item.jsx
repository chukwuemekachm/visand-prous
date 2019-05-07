import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Image from '../../atoms/Image/Image';
import Title from '../../atoms/Title/Title';
import Button, { ButtonType } from '../../atoms/Button/Button';
import Price from '../../atoms/Price/Price';
import { screenSizes } from '../../_settings/_variables';

const Wrapper = styled.figure.attrs({
  className: 'vs-item',
})`
  margin: .8em 0em;
  width: 23%;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  padding: 2em 0;
  text-align: center;
  align-items: center;
  box-sizing: border-box;

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

  @media (max-width: ${screenSizes.TABLET}) {
    margin: .8em auto;
    display: flex;
    width: 47%;
  }

  @media (max-width: ${screenSizes.MOBILE}) {
    margin: .8em auto;
    display: flex;
    width: 100%;
  }
`;

const Item = ({ item }) => {
  const { thumbnail, name, price } = item;
  const isLow = Number.parseFloat(price) < 15.00;
  return (
    <Wrapper>
      <Image src={`https://${thumbnail}`} />
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

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../../atoms/Image/Image';
import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';
import Button, { ButtonType } from '../../atoms/Button/Button';
import Price from '../../atoms/Price/Price';
import { screenSizes } from '../../_settings/_variables';

const Wrapper = styled.figure.attrs({
  className: 'vs-item',
})`
  margin: .8em 0em;
  width: 18%;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0 0.0625em 0.125em 0 rgba(9, 30, 66, 0.25);
  padding: .8em .8em 2em .8em;
  text-align: center;
  align-items: center;
  box-sizing: border-box;

  a {
    text-decoration: none;
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    margin-top: 1.8em;
  }

  p {
    margin-top: 0;
  }

  button {
    font-size: .8em;
  }

  :hover {
    box-shadow: 0 0.0625em 1.25em 0.125em rgba(0, 0, 0, 0.1);
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

const Item = ({ item, handleAddItemToCart }) => {
  const {
    thumbnail, name, price, productId, description,
  } = item;
  const isLow = Number.parseFloat(price) < 15.00;
  return (
    <Wrapper>
      <Link to={`/${productId}`}>
        <Image src={`https://${thumbnail}`} />
      </Link>
      <Link to={`/${productId}`}>
        <Title>{name}</Title>
      </Link>
      <Text>{description}</Text>
      {
        isLow
          ? <Price>{price}</Price>
          : (
            <Button
              handleClick={() => handleAddItemToCart(productId)}
              type={ButtonType.ROUNDED}
            >
              Add To Cart
            </Button>
          )
      }
    </Wrapper>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    productId: PropTypes.number.isRequired,
  }).isRequired,
  handleAddItemToCart: PropTypes.func.isRequired,
};

export default Item;

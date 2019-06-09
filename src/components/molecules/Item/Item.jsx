import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../../atoms/Image/Image';
import Title from '../../atoms/Title/Title';
import Flex from '../../_layouts/Flex';
import Button, { ButtonType } from '../../atoms/Button/Button';
import Price from '../../atoms/Price/Price';
import { screenSizes } from '../../_settings/_variables';

const Wrapper = styled.figure.attrs({
  className: 'vs-item',
})`
  margin: 0.8em 0em;
  width: 18%;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0 0.0625em 0.125em 0 rgba(9, 30, 66, 0.25);
  padding: 0em 0em 2em 0em;
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
    margin-top: 0.7em;
  }

  p {
    margin-top: 0;
  }

  .price-with-discount,
  .price-with-discount p {
    color: grey;
    line-height: 1.6;
  }

  button {
    font-size: 0.8em;
  }

  :hover {
    box-shadow: 0 0.0625em 1.25em 0.125em rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${screenSizes.TABLET}) {
    margin: 0.8em auto;
    display: flex;
    width: 47%;
  }

  @media (max-width: ${screenSizes.MOBILE}) {
    margin: 0.8em auto;
    display: flex;
    width: 100%;
  }
`;

const Item = ({ item, handleAddItemToCart }) => {
  const {
    thumbnail, name, price, productId, discountedPrice,
  } = item;
  const isDiscounted = Number.parseFloat(discountedPrice) > 0;
  return (
    <Wrapper>
      <Link to={`/${productId}`}>
        <Image src={`http://${thumbnail}`} />
      </Link>
      <Link to={`/${productId}`}>
        <Title>{name}</Title>
      </Link>
      <React.Fragment>
        {isDiscounted ? (
          <Flex>
            <Price size="large" className="discounted-price">
              {discountedPrice}
            </Price>
            <s className="price-with-discount">
              <Price className="price-with-discount">{price}</Price>
            </s>
          </Flex>
        ) : (
          <Price size="large">{price}</Price>
        )}
        <Button
          handleClick={() => handleAddItemToCart(productId)}
          type={ButtonType.ROUNDED}
        >
          Add To Cart
        </Button>
      </React.Fragment>
    </Wrapper>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    discountedPrice: PropTypes.string,
    productId: PropTypes.number.isRequired,
  }).isRequired,
  handleAddItemToCart: PropTypes.func.isRequired,
};

export default Item;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';
import Image from '../../atoms/Image/Image';
import Flex from '../../_layouts/Flex';
import FlexItem from '../../_layouts/FlexItem';
import Price from '../../atoms/Price/Price';
import Quantity from '../Quantity/Quantity';
import { color } from '../../_settings/_variables';

const Item = styled.li`
  list-style-type: none;
  border-bottom: .05em solid ${color.CRIMSON};
  padding: .5em 0;
  :first-child {
    border-top: .05em solid ${color.CRIMSON};
  }
  img {
    margin-top: 5px;
  }
  .cart-item {
    margin-top: -20px;
  }
`;

Item.View = styled.span``;

function CartItem({
  handleAddToCart,
  handleRemoveFromCart,
  item: {
    name, subtotal, quantity, thumbnail, productId,
    itemId, attributes: { Color = { attributeValue: 'White' }, Size = { attributeValue: 'M' } },
  },
}) {
  return (
    <Item>
      <Item.View>
        <Title>{name}</Title>
      </Item.View>
      <Flex
        justifyContent="space-around"
        className="cart-item"
      >
        <FlexItem>
          <Image src={`http://${thumbnail}`} />
          <Text>{`Color:  ${Color.attributeValue}`}</Text>
          <Text>{`Size:  ${Size.attributeValue}`}</Text>
        </FlexItem>
        <FlexItem>
          <Item.View>
            
          </Item.View>
          <Item.View>
            <Quantity
              quantity={quantity}
              handleIncrement={() => handleAddToCart(productId)}
              handleDecrement={() => handleRemoveFromCart(itemId, quantity)}
            />
          </Item.View>
          <Item.View>
            <Price>{subtotal}</Price>
          </Item.View>
        </FlexItem>
      </Flex>
    </Item>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subtotal: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
    itemId: PropTypes.string.isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func,
  handleRemoveFromCart: PropTypes.func,
};

CartItem.defaultProps = {
  handleAddToCart: () => true,
  handleRemoveFromCart: () => true,
};

export default CartItem;

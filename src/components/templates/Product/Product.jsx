import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Image from '../../atoms/Image/Image';
import SubHeader from '../../atoms/SubHeader/SubHeader';
import Price from '../../atoms/Price/Price';
import ItemAttributes from '../../molecules/ItemAttributes/ItemAttributes';
import Quantity from '../../molecules/Quantity/Quantity';
import Button, { ButtonType, ButtonSize } from '../../atoms/Button/Button';
import Flex from '../../_layouts/Flex';
import { color } from '../../_settings/_variables';

import { getProductDetails } from '../../../actions/catalog';
import { addItemToCart } from '../../../actions/cart';
import toastr from '../../../helpers/toastr';

const Wrapper = styled.div`
  width: 70%;
  margin: 3em auto;
`;

Wrapper.Gallery = styled.section`
  width: 60%;
  margin: 0 auto;
  display: flex;
`;

Wrapper.Gallery.Main = styled.figure`
  width: 60%;
  margin: auto;
  display: inline-block;
`;

Wrapper.Gallery.Aside = styled.div`
  width: 15%;
  display: inline-block;

  img {
    width: 100%;
    margin: auto;
    margin-bottom: 1em;
    padding: .5em;
    border: .05em solid ${color.CRIMSON};
    box-sizing: border-box;
    cursor: pointer;
  }
`;

Wrapper.Section = styled.section`
  width: 38%;
  margin: auto;
  display: inline-block;

  h2 {
    margin-top: 0;
  }

  h3 {
    margin-top: 2em;
  }
`;

class Product extends Component {
  state = {
    selectedAttributes: {
      Color: {
        attributeName: 'Color',
        attributeValueId: 10,
        attributeValue: 'Yellow',
      },
      Size: {
        attributeName: 'Size',
        attributeValueId: 1,
        attributeValue: 'S',
      },
    },
    quantity: 1,
    src: '',
  };

  async componentDidMount() {
    try {
      const { match: { params: { productId } }, getProductDetails } = this.props;
      await getProductDetails(productId);
    } catch (err) {
      console.log(err);
    }
  }

  handleAddToCart = async (productId) => {
    try {
      const { selectedAttributes: attributes } = this.state;
      let { quantity } = this.state;
      const message = `Successfully added ${quantity} item(s) to cart`;
      const { addItemToCart } = this.props;
      while (quantity > 0) {
        await addItemToCart({ productId, attributes });
        quantity--;
      }
      toastr.success(message);
    } catch (err) {
      console.log(err);
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  }

  handleDecrement = () => {
    this.setState((prevState) => {
      if (prevState.quantity > 1) {
        return {
          quantity: prevState.quantity - 1,
        }
      }
    });
  }

  handleAttributeChange = (attribute, value) => {
    const { selectedAttributes } = this.state;
    selectedAttributes[attribute] = value;
    this.setState({ selectedAttributes });
  }

  handleImageChange = src => this.setState({
    src,
  });

  render() {
    const { product: {
      productId, name, price, image, image2, attributes,
    } } = this.props;
    const { quantity, src, selectedAttributes } = this.state;
    return (
      <Wrapper>
        {
          name
            ? (
              <Flex>
                <Wrapper.Gallery>
                  <Wrapper.Gallery.Aside>
                    <Flex flexDirection="column">
                      <Image
                        src={`https://${image}`}
                        handleClick={() => this.handleImageChange(`https://${image}`)}
                      />
                      <Image
                        src={`https://${image2}`}
                        handleClick={() => this.handleImageChange(`https://${image2}`)}
                      />
                    </Flex>
                  </Wrapper.Gallery.Aside>
                  <Wrapper.Gallery.Main>
                    <Image src={src || `https://${image}`} />
                  </Wrapper.Gallery.Main>
                </Wrapper.Gallery>
                <Wrapper.Section>
                  <SubHeader>{name}</SubHeader>
                  <Price>{price}</Price>
                  <ItemAttributes
                    attributes={attributes}
                    handleAttributeChange={this.handleAttributeChange}
                    selectedAttributes={selectedAttributes}
                  />
                  <Quantity
                    quantity={quantity}
                    handleDecrement={this.handleDecrement}
                    handleIncrement={this.handleIncrement}
                  />
                  <Button
                    size={ButtonSize.LARGE}
                    type={ButtonType.ROUNDED}
                    handleClick={() => this.handleAddToCart(productId)}
                  >
                    Add To Cart
            </Button>
                </Wrapper.Section>
              </Flex>
            )
            : ''
        }
      </Wrapper>
    );
  }
}

export const mapStateToProps = state => ({
  product: state.catalog.product,
});

export const mapDispatchToProps = dispatch => ({
  getProductDetails: productId => dispatch(getProductDetails(productId)),
  addItemToCart: item => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

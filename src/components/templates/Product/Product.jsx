import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import Divider from '../../atoms/Divider/Divider';
import SubHeader from '../../atoms/SubHeader/SubHeader';
import Price from '../../atoms/Price/Price';
import ItemAttributes from '../../molecules/ItemAttributes/ItemAttributes';
import Quantity from '../../molecules/Quantity/Quantity';
import Button, { ButtonType, ButtonSize } from '../../atoms/Button/Button';
import Flex from '../../_layouts/Flex';
import Item from '../../molecules/Item/Item';
import { color } from '../../_settings/_variables';

import { getProductDetails } from '../../../actions/catalog';
import { addItemToCart } from '../../../actions/cart';
import toastr from '../../../helpers/toastr';

const Wrapper = styled.div`
  width: 70%;
  margin: 3em auto;
  .price-with-discount,
  .price-with-discount p {
    color: grey;
    line-height: 1.6;
  }
  .vs-item {
    width: 25%;
    margin: auto;
  }
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
      const { match: { params: { productId } }, getProductDetails, getCatalog } = this.props;
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
      toastr.success('Failed to add this item to your cart');
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
    const {
      product: {
        productId, name, price, discountedPrice,
        image, image2, attributes, description,
      },
      products,
    } = this.props;
    const { quantity, src, selectedAttributes } = this.state;
    const isDiscounted = Number.parseFloat(discountedPrice) > 0;

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
                  <Text>{description}</Text>
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
        <br /> <br />
        <SubHeader>Featured Items</SubHeader>
        <Divider />
        <br /> <br />
        <Flex justifyContent="space-around">
          {
            products.map((product, i) => {
              if (i < 3) {
                i++;
                return (<Item
                  handleAddItemToCart={this.handleAddToCart}
                  key={product.productId}
                  item={product}
                />);
              }
            })
          }
        </Flex>
      </Wrapper>
    );
  }
}

export const mapStateToProps = state => ({
  product: state.catalog.product,
  products: state.catalog.filteredProducts,
});

export const mapDispatchToProps = dispatch => ({
  getProductDetails: productId => dispatch(getProductDetails(productId)),
  addItemToCart: item => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

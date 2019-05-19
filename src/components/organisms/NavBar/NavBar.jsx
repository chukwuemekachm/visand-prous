import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SubHeader from '../../atoms/SubHeader/SubHeader';
import NavLink from '../../molecules/NavLink/NavLink';
import Title from '../../atoms/Title/Title';
import Search from '../../molecules/Search/Search';
import CartCount from '../../molecules/CartCount/CartCount';
import Flex from '../../_layouts/Flex';
import ShoppingCart from '../../molecules/ShoppingCart/ShoppingCart';
import { color, screenSizes } from '../../_settings/_variables';

import { getCatalog } from '../../../actions/catalog';
import { getCartDetails } from '../../../actions/cart';
import { logoutUser } from '../../../actions/user';
import { getItemsCount } from '../../../utils';
import toastr from '../../../helpers/toastr';

const Wrapper = styled.div`
  top: 0em;
  position: -webkit-sticky;
  position: sticky;
`;

Wrapper.Nav  = styled.nav`
  padding: .4em 2em;
  background-color: ${color.DARK_SLATE_GREY};
  width: 100%;
  box-sizing: border-box;

  a, h2 {
    display: inline-block;
    margin: 0em;
    color: ${color.CRIMSON};
    letter-spacing: .1em;
    align-self: center;
  }

  h3 {
    color: ${color.LAVENDER};
  }

  @media (max-width: ${screenSizes.MOBILE}) {
    h3, h3 a {
      width: 100%;
    }
    padding: 1em 2em;
  }
`;

export class NavBar extends Component {
  state = {
    search: '',
    displayCart: false,
  };

  async componentDidMount() {
    try {
      const { getCartDetails } = this.props;
      await getCartDetails();
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = ({ target: { value } }) => this.setState({ search: value });

  handleUserLogout = async () => {
    try {
      const { logoutUser } = this.props;
      await logoutUser();
    } catch (err) {
      console.log(err);
    }
  }

  handleClear = () => this.setState({ search: '' });

  handleCartToggle = () => {
    const { items } = this.props;
    if (!items.length) {
      return toastr.info('You currently have no items in your cart');
    }
    return this.setState(({ displayCart }) => ({ displayCart: !displayCart }));
  };

  handleSubmit = async ({ target: { value } }) => {
    try {
      if (value && value.length > 3) {
        const { getCatalog } = this.props;
        await getCatalog(value);
      }
      return true;
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { items, profile: { name } } = this.props;
    const { search, displayCart } = this.state;
    return (
      <Wrapper>
        <Wrapper.Nav>
          <Flex justifyContent="space-between" alignItems="baseline">
            <Link to="/">
              <SubHeader>VISAND-PROUS</SubHeader>
            </Link>
            <Flex
              display="inline-flex"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Search
                value={search}
                handleChange={this.handleChange}
                handleClear={this.handleClear}
                handleEnter={this.handleSubmit}
              />
              <CartCount
                itemCount={
                  items.length
                    ? getItemsCount(items)
                    : 0
                }
                handleClick={this.handleCartToggle}
              />
              <Flex display="inline-flex">
                {
                  name
                    ? <Title>{name}</Title>
                    : <NavLink url="/login">Login</NavLink>
                }
              </Flex>
            </Flex>
          </Flex>
        </Wrapper.Nav>
        <ShoppingCart
          items={items}
          displayCart={displayCart}
          handleCartToggle={this.handleCartToggle}
        />
      </Wrapper>
    );
  }
}

export const mapStateToProps = state => ({
  items: state.cart.items,
  profile: state.user.profile,
});

export const mapDispatchToProps = dispatch => ({
  getCatalog: search => dispatch(getCatalog(search)),
  getCartDetails: () => dispatch(getCartDetails()),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

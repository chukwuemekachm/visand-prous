import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SubHeader from '../../atoms/SubHeader/SubHeader';
import NavLink from '../../molecules/NavLink/NavLink';
import Search from '../../molecules/Search/Search';
import CartCount from '../../molecules/CartCount/CartCount';
import Flex from '../../_layouts/Flex';
import { color } from '../../_settings/_variables';

const Wrapper = styled.nav`
  padding: 1.2em 2em;
  background-color: ${color.DARK_SLATE_GREY};

  h2 {
    display: inline-block;
    margin: 0em;
    color: ${color.CRIMSON};
    letter-spacing: .1em;
    align-self: center;
  }
`;

export class NavBar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target: { value } }) => this.setState({ search: value });

  render() {
    const { itemCount = 0 } = this.props;
    const { search } = this.state;
    return (
      <Wrapper>
        <Flex justifyContent="space-between" alignItems="baseline">
          <SubHeader>VISAND-PROUS</SubHeader>
          <Flex
            display="inline-flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Flex display="inline-flex">
              <NavLink url="/">Women</NavLink>
              <NavLink url="/">Men</NavLink>
              <NavLink url="/">Kids</NavLink>
              <NavLink url="/">Shoes</NavLink>
              <NavLink url="/">Brands</NavLink>
            </Flex>
            <Search value={search} handleChange={this.handleChange} />
            <CartCount itemCount={itemCount} />
          </Flex>
        </Flex>
      </Wrapper>
    );
  }
}

export default NavBar;

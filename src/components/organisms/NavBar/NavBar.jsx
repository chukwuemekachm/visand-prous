import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SubHeader from '../../atoms/SubHeader/SubHeader';
import NavLink from '../../molecules/NavLink/NavLink';
import Search from '../../molecules/Search/Search';
import CartCount from '../../molecules/CartCount/CartCount';
import Flex from '../../_layouts/Flex';
import { color, screenSizes } from '../../_settings/_variables';

import { getCatalog } from '../../../actions/catalog';

const Wrapper = styled.nav`
  padding: 1.2em 2em;
  background-color: ${color.DARK_SLATE_GREY};
  width: 100%;
  box-sizing: border-box;
  position: -webkit-sticky;
  position: sticky;
  top: 0em;

  h2 {
    display: inline-block;
    margin: 0em;
    color: ${color.CRIMSON};
    letter-spacing: .1em;
    align-self: center;
  }

  @media (max-width: ${screenSizes.MOBILE}) {
    h3, h3 a {
      width: 100%;
    }
  }
`;

export class NavBar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target: { value } }) => this.setState({ search: value });

  handleClear = () => this.setState({ search: '' });

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
            <Search
              value={search}
              handleChange={this.handleChange}
              handleClear={this.handleClear}
              handleEnter={this.handleSubmit}
            />
            <CartCount itemCount={itemCount} />
          </Flex>
        </Flex>
      </Wrapper>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  getCatalog: search => dispatch(getCatalog(search)),
});

export default connect(null, mapDispatchToProps)(NavBar);

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FaChevronRight, FaChevronLeft } from 'react-icons/lib/fa';

import Icon from '../../atoms/Icon/Icon';
import Flex from '../../_layouts/Flex';
import { fontFamily, fontWeight } from '../../_settings/_variables';

import { setPaginatedProducts } from '../../../actions/catalog';

const Wrapper = styled.section`
  width: 40%;
  margin: 2.3em auto;
`;

Wrapper.PageNumber = styled.span`
  font-size: 1em;
  padding: 0 .3em;
  font-weight: ${fontWeight.BOLD};
  font-family: ${fontFamily.OPEN_SANS};
`;

class Pagination extends Component {
  state = {

  };

  componentDidUpdate(prevProps) {
    if (this.props.filteredProducts !== prevProps.filteredProducts) {
      const { setPaginatedProducts } = this.props;
      setPaginatedProducts(1);
    }
  }

  render() {
    const { filteredProducts, setPaginatedProducts, pageNumber } = this.props;
    const pageCount = Math.ceil(filteredProducts.length / 10);
    const pages = [];
    for (let counter = 1; counter <= pageCount; counter++) {
      pages.push(counter);
    }

    return (
      <Wrapper>
        <Flex justifyContent="space-between">
          <Icon
            backGround
            handleClick={() => setPaginatedProducts(pageNumber - 1)}
          >
            <FaChevronLeft />
          </Icon>
          {
            pages.map(page => (
              <Icon
                backGround
                key={page}
                handleClick={() => setPaginatedProducts(page)}
                active={pageNumber == page}
              >
                <Wrapper.PageNumber>{page}</Wrapper.PageNumber>
              </Icon>
            ))
          }
          <Icon
            backGround
            handleClick={() => setPaginatedProducts(page + 1)}
          >
            <FaChevronRight />
          </Icon>
        </Flex>
      </Wrapper>
    );
  }
}


export const mapStateToProps = state => ({
  filteredProducts: state.catalog.filteredProducts,
  pageNumber: state.catalog.pageNumber,
});

export const mapDispatchToProps = dispatch => ({
  setPaginatedProducts: pageNumber => dispatch(setPaginatedProducts(pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

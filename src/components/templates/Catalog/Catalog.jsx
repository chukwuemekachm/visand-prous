import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Flex from '../../_layouts/Flex';
import Banner from '../../molecules/Banner/Banner';
import Item from '../../molecules/Item/Item';
import SideNav from '../../molecules/SideNav/SideNav';

import {
  getCatalog,
  getDepartmentCategories,
  getDepartments,
  getCategoryProducts,
} from '../../../actions/catalog';
import { addItemToCart } from '../../../actions/cart';
import toastr from '../../../helpers/toastr';
import Pagination from '../../organisms/Pagination/Pagination';

const Wrapper = styled.div`
  width: 95%;
  margin: auto;

  .vs-item:last-child {
    justify-self: flex-start!important;
  }
`;

export class Catalog extends Component {
  state = {
    selectedDepartmentId: 1,
    selectedCategoryId: 0,

  };

  async componentDidMount() {
    try {
      const { getDepartmentCategories, getDepartments, getCatalog } = this.props;
      const { selectedDepartmentId } = this.state;
      await Promise.all([
        getDepartments(),
        getDepartmentCategories(selectedDepartmentId),
        getCatalog(),
      ]);
    } catch (err) {
      console.log(err);
    }
  }

  handleDepartmentClick = async (departmentId) => {
    try {
      const { getDepartmentCategories } = this.props;
      this.setState({ selectedDepartmentId: departmentId });
      await getDepartmentCategories(departmentId);
    } catch (err) {
      console.log(err);
    }
  };

  handleCategoryClick = async (categoryId) => {
    try {
      const { getCategoryProducts } = this.props;
      this.setState({ selectedCategoryId: categoryId });
      await getCategoryProducts(categoryId);
    } catch (err) {
      console.log(err);
    }
  };

  handleAddToCart = async (productId) => {
    try {
      const { addItemToCart } = this.props;
      await addItemToCart({ productId });
      toastr.success('Successfully added item to cart');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { departments = [], categories = [], products = [] } = this.props;
    const { selectedDepartmentId, selectedCategoryId } = this.state;
    return (
      <Wrapper>
        <Flex justifyContent="space-between">
          <SideNav
              departments={departments}
              categories={categories}
              selectedDepartmentId={selectedDepartmentId}
              selectedCategoryId={selectedCategoryId}
              handleCategoryClick={this.handleCategoryClick}
              handleDepartmentClick={this.handleDepartmentClick}
            />
            <Banner />
        </Flex>
        <Flex justifyContent="space-between">
          {
            products.map((product) => (
              <Item
                handleAddItemToCart={this.handleAddToCart}
                key={product.productId}
                item={product}
              />
            ))
          }
        </Flex>
        <Pagination />
      </Wrapper>
    );
  }
}

export const mapStateToProps = state => {
  const products =  state.catalog.paginatedProducts.length
    ? state.catalog.paginatedProducts
    : state.catalog.filteredProducts;
    
  return {
    departments: state.catalog.departments,
    categories: state.catalog.categories,
    products,
  }
};

export const mapDispatchToProps = dispatch => ({
  getCatalog: () => dispatch(getCatalog()),
  getDepartmentCategories: departmentId => dispatch(getDepartmentCategories(departmentId)),
  getDepartments: () => dispatch(getDepartments()),
  getCategoryProducts: categoryId => dispatch(getCategoryProducts(categoryId)),
  addItemToCart: item => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

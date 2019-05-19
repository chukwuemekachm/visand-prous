import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Title from '../../atoms/Title/Title';
import { color } from '../../_settings/_variables';
import Button, { ButtonTheme } from '../../atoms/Button/Button';
import Flex from '../../_layouts/Flex';

const Wrapper = styled.section`
  margin: .8em 0em;
  padding: .5em 2em 2em;
  width: 23%;
  box-sizing: border-box;
  display: inline-block;

  button {
    margin-top: .3em;
    width: 90%;
  }
`;

function SideNav(props) {
  const {
    categories, departments, selectedDepartmentId,
    selectedCategoryId, handleCategoryClick, handleDepartmentClick,
  } = props;
  return (
    <Wrapper flexDirection="column">
      <Title color={color.DARK_GREY}>Departments</Title>
      <Flex flexDirection="column" alignItems="center">
        {
          departments.length
            ? departments
              .map(({ name, departmentId }) => {
                if (selectedDepartmentId === departmentId) {
                  return (
                    <Button
                      theme={ButtonTheme.PRIMARY}
                      key={departmentId}
                      handleClick={() => handleDepartmentClick(departmentId)}
                    >
                      {name}
                    </Button>
                  );
                }
                return (
                  <Button
                    theme={ButtonTheme.SECONDARY}
                    key={departmentId}
                    handleClick={() => handleDepartmentClick(departmentId)}
                  >
                    {name}
                  </Button>
                );
              })
            : ''
        }
      </Flex>
      <Title color={color.DARK_GREY}>Categories</Title>
      <Flex flexDirection="column" alignItems="center">
        {
          categories
            ? categories
              .map(({ name, categoryId }) => {
                if (selectedCategoryId === categoryId) {
                  return (
                    <Button
                      theme={ButtonTheme.PRIMARY}
                      key={categoryId}
                      handleClick={() => handleCategoryClick(categoryId)}
                    >
                      {name}
                    </Button>
                  );
                }
                return (
                  <Button
                    theme={ButtonTheme.SECONDARY}
                    key={categoryId}
                    handleClick={() => handleCategoryClick(categoryId)}
                  >
                    {name}
                  </Button>
                );
              })
            : ''
        }
      </Flex>
    </Wrapper>
  );
}

SideNav.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  departments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedDepartmentId: PropTypes.number.isRequired,
  selectedCategoryId: PropTypes.number.isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
  handleDepartmentClick: PropTypes.func.isRequired,
};

export default SideNav;

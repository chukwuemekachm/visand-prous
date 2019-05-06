import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div``;

const FlexItem = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

FlexItem.propTypes = {
  children: PropTypes.node.isRequired,
};

FlexItem.defaultProps = {};

export default FlexItem;

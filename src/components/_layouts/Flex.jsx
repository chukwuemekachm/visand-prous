import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

function Flex(props) {
  const {
    children, display, justifyContent, alignItems, flexWrap, flexDirection,
  } = props;
  return (
    <Wrapper
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      flexDirection={flexDirection}
    >
      {children}
    </Wrapper>
  );
}

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  justifyContent: PropTypes
    .oneOf(['center', 'flex-start', 'flex-end', 'space-around', 'space-between', 'space-evenly']),
  alignItems: PropTypes
    .oneOf(['center', 'flex-start', 'flex-end', 'stretch', 'baseline']),
  flexWrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
  flexDirection: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
};

Flex.defaultProps = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  flexDirection: 'row',
};

export default Flex;

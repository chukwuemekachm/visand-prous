import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fontFamily } from '../../_settings/_variables';

const Wrapper = styled.h2`
  font-family: ${fontFamily.OPEN_SANS};
  font-size: 1.6em;
`;

function SubHeader({ children }) {
  return <Wrapper>{ children }</Wrapper>;
}

SubHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubHeader;

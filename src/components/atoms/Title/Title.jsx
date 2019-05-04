import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fontFamily, fontWeight } from '../../_settings/_variables';

const Wrapper = styled.h3`
  font-family: ${fontFamily.OPEN_SANS};
  font-size: 1.5em;
  font-weight: ${fontWeight.BOLD};
  letter-spacing: 0em;
`;

const Title = ({ children }) => (<Wrapper>{ children }</Wrapper>);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;

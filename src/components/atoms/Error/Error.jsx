import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color, fontFamily, fontWeight } from '../../_settings/_variables';

const Wrapper = styled.span`
  padding: .6em;
  color: ${color.CRIMSON};
  font-family: ${fontFamily.OPEN_SANS};
  font-size: .8em;
  font-weight: ${fontWeight.LIGHT};
`;

function Error({ children }) {
  return (<Wrapper>{children}</Wrapper>);
}

Error.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Error;

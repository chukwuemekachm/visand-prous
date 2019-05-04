import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { fontFamily, color } from '../../_settings/_variables';

const extraCss = css`
  background-color: ${color.CRIMSON};
  color: ${color.WHITE};
  border-radius: 3em;

  :hover {
    background-color: ${color.WHITE};
    color: ${color.CRIMSON};
    border: .7px solid ${color.CRIMSON};
  }
`;

const Wrapper = styled.span`
  font-family: ${fontFamily.OPEN_SANS};
  font-size: 1.5em;
  padding: .3em .73em .3em .73em;

  :hover {
    background-color: ${color.CRIMSON};
    color: ${color.WHITE};
    border-radius: 3em;
    cursor: pointer;
  }

  ${({ active }) => (active ? extraCss : '')}
`;

const PageNumber = ({ active, children }) => (
  <Wrapper active={active}>{children}</Wrapper>
);

PageNumber.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

PageNumber.defaultProps = {
  active: false,
};

export default PageNumber;

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color as colors } from '../../_settings/_variables';

export const IconSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const extraCss = css`
  padding: .4em .7em .19em .7em;
  border-radius: 3em;
  background-color: ${colors.LAVENDER};
  
  :hover {
    cursor: pointer;
    background-color: ${colors.DIM_GREY};
    color: ${colors.WHITE};
  }
`;

const Wrapper = styled.span`
  font-size: ${({ size }) => (size === IconSize.MEDIUM ? '1.2em' : '1.8em')};
  color: ${({ color }) => colors[color]};
  ${({ backGround }) => (backGround ? extraCss : '')};
`;

function Icon(props) {
  const {
    children, size, color, backGround, handleClick,
  } = props;
  return (
    <Wrapper
      size={size}
      color={color}
      backGround={backGround}
      onClick={handleClick}
    >
      { children }
    </Wrapper>
  );
}

Icon.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  backGround: PropTypes.bool,
  handleClick: PropTypes.func,
};

Icon.defaultProps = {
  size: IconSize.MEDIUM,
  color: colors.BLACK,
  backGround: false,
  handleClick: () => true,
};

export default Icon;

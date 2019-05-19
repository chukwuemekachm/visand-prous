import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { color as colors } from '../../_settings/_variables';

export const IconSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const extraCss = css`
  padding: .16em .27em .25em .27em;
  border-radius: 3em;
  background-color: ${({ active }) => (active ? colors.DIM_GREY : colors.LAVENDER)};
  color: ${({ active }) => (active ? colors.WHITE : colors.BLACK)};
  
  :hover {
    cursor: pointer;
    background-color: ${({ active }) => (active ? colors.LAVENDER : colors.DIM_GREY)};
    color: ${({ active }) => (active ? colors.BLACK : colors.WHITE)};
  }
`;

const Wrapper = styled.span`
  font-size: ${({ size }) => (size === IconSize.MEDIUM ? '1.2em' : '1.8em')};
  color: ${({ color }) => colors[color]};
  ${({ backGround }) => (backGround ? extraCss : '')};
`;

function Icon(props) {
  const {
    children, size, color, backGround, handleClick, active,
  } = props;
  return (
    <Wrapper
      size={size}
      color={color}
      backGround={backGround}
      onClick={handleClick}
      active={active}
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
  active: PropTypes.bool,
};

Icon.defaultProps = {
  size: IconSize.MEDIUM,
  color: colors.BLACK,
  backGround: false,
  handleClick: () => true,
  active: false,
};

export default Icon;

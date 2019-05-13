import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fontFamily, fontWeight, color } from '../../_settings/_variables';

export const ButtonType = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
};

export const ButtonTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export const ButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const Wrapper = styled.button`
  border: none;
  letter-spacing: .01em;
  font-family: ${fontFamily.OPEN_SANS};
  outline: none;
  box-sizing: border-box;

  :hover {
    cursor: pointer;
  }
`;

Wrapper.default = styled(Wrapper)`
  padding: .3em 1.5em;
  border-radius: .1em;
  font-size: 1.1em;
  font-weight: ${fontWeight.LIGHT};
  background-color: ${({ theme }) => (theme === ButtonTheme.PRIMARY ? color.CRIMSON : color.LAVENDER)};
  color: ${({ theme }) => (theme === ButtonTheme.PRIMARY ? color.WHITE : color.BLACK)};

  :hover {
    background-color: ${({ theme }) => (theme === ButtonTheme.PRIMARY ? color.LAVENDER : color.CRIMSON)};
    color: ${({ theme }) => (theme === ButtonTheme.PRIMARY ? color.BLACK : color.WHITE)};
  }
`;

Wrapper.rounded = styled(Wrapper)`
  padding: ${({ size }) => (size === ButtonSize.MEDIUM ? '.6em 1.4em' : '1.1em 3.5em')};
  border-radius: 2em;
  font-size: 1em;
  font-weight: ${fontWeight.BASE};
  background-color: ${({ theme }) => (theme === ButtonTheme.PRIMARY ? color.CRIMSON : color.WHITE)};
  color: ${({ theme }) => (theme === ButtonTheme.PRIMARY ? color.WHITE : color.CRIMSON)};
  border: .7px solid ${({ size }) => (size === ButtonSize.MEDIUM ? color.CRIMSON : color.WHITE)};

  :hover {
    background-color: ${({ theme }) => (theme === ButtonTheme.PRIMARY ? color.WHITE : color.CRIMSON)};
    color: ${({ theme }) => (theme === ButtonTheme.PRIMARY ? color.CRIMSON : color.WHITE)};
    border: .7px solid ${color.CRIMSON};
  }
`;

const Button = (props) => {
  const {
    type, size, theme, children, handleClick,
  } = props;
  const MyButton = Wrapper[type];
  return (
    <MyButton
      size={size}
      theme={theme}
      onClick={handleClick}
    >
      {children}
    </MyButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: ButtonType.DEFAULT,
  size: ButtonSize.MEDIUM,
  theme: ButtonTheme.PRIMARY,
  handleClick: () => true,
};

export default Button;

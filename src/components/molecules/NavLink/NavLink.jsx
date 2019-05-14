import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Wrapper as Title } from '../../atoms/Title/Title';
import { color } from '../../_settings/_variables';

const Wrapper = styled(Title)`
  a {
    color: ${color.WHITE};
    text-decoration: none;
    padding: 0em .5em;
    background-color: ${color.DARK_SLATE_GREY};

    :hover {
      color: ${color.CRIMSON};
    }
  }
  display: inline-block;
`;

const NavLink = ({ children, url, handleClick }) => (
  <Wrapper>
    <Link to={url} onClick={handleClick}>{ children }</Link>
  </Wrapper>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
  handleClick: PropTypes.func,
};

NavLink.defaultProps = {
  url: '/',
  handleClick: () => true,
};

export default NavLink;

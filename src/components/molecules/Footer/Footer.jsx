import React from 'react';
import styled from 'styled-components';
import {
  IoSocialInstagramOutline,
  IoSocialPinterest,
  IoSocialTwitter,
  IoSocialFacebook,
} from 'react-icons/lib/io';

import Text from '../../atoms/Text/Text';
import Icon from '../../atoms/Icon/Icon';
import NavLink from '../NavLink/NavLink';
import Flex from '../../_layouts/Flex';
import { color } from '../../_settings/_variables';

const Wrapper = styled.footer`
  margin-top: 1em;
  padding: 2.5em 0em;
  background-color: ${color.DARK_SLATE_GREY};

  [display="flex"] {
    width: 100%;
  }

  svg {
    background-color: ${color.LAVENDER};
    padding: .38em;
    border-radius: 3em;
    font-size: 1em;
    margin: 1em .5em
  }

  h3 {
    margin: 0em 1em;
  }

  p {
    margin: 0em .7em;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Flex flexDirection="column">
        <Flex justifyContent="center">
          <NavLink>Women</NavLink>
          <NavLink>Men</NavLink>
          <NavLink>Kids</NavLink>
          <NavLink>Shoes</NavLink>
          <NavLink>Brands</NavLink>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Icon>
            <IoSocialInstagramOutline />
          </Icon>
          <Icon>
            <IoSocialPinterest />
          </Icon>
          <Icon>
            <IoSocialTwitter />
          </Icon>
          <Icon>
            <IoSocialFacebook />
          </Icon>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Text color="DARK_GREY">&copy;2019 visand-prous Ltd</Text>
          <Text color="DARK_GREY">Contact</Text>
          <Text color="DARK_GREY">Privacy policy</Text>
        </Flex>
      </Flex>
    </Wrapper>
  );
}

export default Footer;

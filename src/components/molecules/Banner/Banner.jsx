import React from 'react';
import styled from 'styled-components';

import Header from '../../atoms/Header/Header';
import SubHeader from '../../atoms/SubHeader/SubHeader';
import Button, { ButtonSize, ButtonType, ButtonTheme } from '../../atoms/Button/Button';
import { color, fontWeight } from '../../_settings/_variables';

const imageUrl = 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const Wrapper = styled.section`
  background-image: url(${imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin: 2em auto;
`;

Wrapper.Overlay = styled.div`
  padding: 8em 4em;
  background-color: rgba(0, 0, 0, 0.6);

  h1 {
    margin: 0em;
  }

  h1, h2 {
    color: ${color.WHITE};
  }

  button {
    font-weight: ${fontWeight.BOLD};
  }

  @media only screen and (max-width: 900px) {
    padding: 2.5em 1em;
  }
`;

const Banner = () => (
  <Wrapper>
    <Wrapper.Overlay>
      <Header>New Trend</Header>
      <SubHeader>Scandi Cool</SubHeader>
      <Button
        size={ButtonSize.LARGE}
        type={ButtonType.ROUNDED}
        theme={ButtonTheme.SECONDARY}
      >
        Shop
      </Button>
    </Wrapper.Overlay>
  </Wrapper>
);

export default Banner;

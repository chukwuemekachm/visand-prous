import React from 'react';
import styled from 'styled-components';

import Header from '../../atoms/Header/Header';
import SubHeader from '../../atoms/SubHeader/SubHeader';
import Button, { ButtonSize, ButtonType, ButtonTheme } from '../../atoms/Button/Button';
import { color, fontWeight } from '../../_settings/_variables';

const Wrapper = styled.section`
  background-image: url('https://www.w3schools.com/w3images/jeans.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

Wrapper.Overlay = styled.div`
  padding: 6em 4em;
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

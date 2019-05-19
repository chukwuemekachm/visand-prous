import React from 'react';
import styled from 'styled-components';

import Header from '../../atoms/Header/Header';
import SubHeader from '../../atoms/SubHeader/SubHeader';
import Button, { ButtonSize, ButtonType, ButtonTheme } from '../../atoms/Button/Button';
import { color, fontWeight } from '../../_settings/_variables';

const imageUrl = 'https://cdn.pixabay.com/photo/2017/08/10/05/11/shirts-2618461_1280.jpg';

const Wrapper = styled.section`
  background-image: url(${imageUrl});
  background-repeat: no-repeat;
  background-size: center;
  width: 73%;
  margin: 2em auto;
  display: inline-block;
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

import React from 'react';
import styled from 'styled-components';

import SubHeader from '../../atoms/SubHeader/SubHeader';

const Wrapper = styled.div`
  margin: 15em 0;
`;

Wrapper.PayPal = styled.div.attrs({
  id: 'paypal-button-container',
})`
  padding: 0 1.5em;
`;

function PayPal() {
  return (
    <Wrapper>
      <SubHeader>
        Make Payment with PayPal
      </SubHeader>
      <Wrapper.PayPal />
    </Wrapper>
  );
}

export default PayPal;

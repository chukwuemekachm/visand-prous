import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Color from '../../atoms/Color/Color';
import Text from '../../atoms/Text/Text';
import Flex from '../../_layouts/Flex';
import { color } from '../../_settings/_variables';

const Wrapper = styled.div`
  p {
    margin: .5em;
  }

  margin-bottom: 2em;
`;

function ShippingTypes(props) {
  const {
    shippingTypes, shippingType: selectedShippingType,
    handleChange,
  } = props;
  return (
    <Wrapper>
      {
          shippingTypes
            ? shippingTypes.map(({ shippingType, shippingId }) => (
              <Flex alignItems="baseline" key={shippingId}>
                <Color
                  color={color.CRIMSON}
                  checked={selectedShippingType === shippingId}
                  handleClick={() => handleChange({ value: shippingId })}
                />
                <Text>{ shippingType }</Text>
              </Flex>
            ))
            : ''
        }
    </Wrapper>
  );
}

ShippingTypes.propTypes = {
  shippingTypes: PropTypes.arrayOf(
    PropTypes.shape({
      shippingType: PropTypes.string.isRequired,
      shippingId: PropTypes.number.isRequired,
    }),
  ).isRequired,
  shippingType: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ShippingTypes;

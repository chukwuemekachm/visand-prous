import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Title from '../../atoms/Title/Title';
import Color from '../../atoms/Color/Color';
import Button, { ButtonTheme } from '../../atoms/Button/Button';
import Flex from '../../_layouts/Flex';
import { color } from '../../_settings/_variables';
import { getAttributeColor } from '../../../utils/index';

const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
`;

function ItemAttributes(props) {
  const {
    attributes: { Color: Colors, Size }, handleAttributeChange, selectedAttributes,
  } = props;
  return (
    <Wrapper>
      <Title color={color.DARK_GREY}>Color</Title>
      <Flex justifyContent="space-between">
        {
          Colors.length
            ? Colors.map(attribute => (
              <Color
                color={getAttributeColor(attribute.attributeValue)}
                key={attribute.attributeValueId}
                handleClick={() => handleAttributeChange('Color', attribute)}
                checked={
                  selectedAttributes.Color.attributeValue === attribute.attributeValue
                }
              />
            ))
            : ''
        }
      </Flex>
      <Title color={color.DARK_GREY}>Size</Title>
      <Flex justifyContent="space-between">
        {
          Size.length
            ? Size.map(attribute => (
              <Button
                key={attribute.attributeValueId}
                handleClick={() => handleAttributeChange('Size', attribute)}
                theme={
                  selectedAttributes.Size.attributeValue === attribute.attributeValue
                    ? ButtonTheme.PRIMARY
                    : ButtonTheme.SECONDARY
                }
              >
                {attribute.attributeValue}
              </Button>
            ))
            : ''
        }
      </Flex>
    </Wrapper>
  );
}

ItemAttributes.propTypes = {
  attributes: PropTypes.shape({
    Color: PropTypes.arrayOf(
      PropTypes.shape({
        attributeName: PropTypes.string.isRequired,
        attributeValueId: PropTypes.number.isRequired,
        attributeValue: PropTypes.string.isRequired,
      }),
    ),
    Size: PropTypes.arrayOf(
      PropTypes.shape({
        attributeName: PropTypes.string.isRequired,
        attributeValueId: PropTypes.number.isRequired,
        attributeValue: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  handleAttributeChange: PropTypes.func.isRequired,
  selectedAttributes: PropTypes.shape({
    Color: PropTypes.shape({
      attributeName: PropTypes.string.isRequired,
      attributeValueId: PropTypes.number.isRequired,
      attributeValue: PropTypes.string.isRequired,
    }),
    Size: PropTypes.shape({
      attributeName: PropTypes.string.isRequired,
      attributeValueId: PropTypes.number.isRequired,
      attributeValue: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ItemAttributes;

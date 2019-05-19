import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SubHeader from '../../atoms/SubHeader/SubHeader';
import Select from '../../atoms/Select/Select';
import Title from '../../atoms/Title/Title';
import Button, { ButtonType } from '../../atoms/Button/Button';
import Flex from '../../_layouts/Flex';
import ShippingTypes from '../ShippingTypes/ShippingTypes';

const Wrapper = styled.div`
  width: 100%;
  padding: 3em 1.5em;
  margin: 1.5em auto 0 auto;
  box-sizing: border-box;

  button {
    width: 100%;
    margin: auto;
  }

  div[display=flex] div[display=flex] {
    margin: .5em 0;
    width: 100%;
  }
`;


function OrderDeliveryForm(props) {
  const {
    shippingRegions, handleChange, shippingType,
    handleOrder, shippingTypes, shippingRegion: selectedShippingRegion,
  } = props;

  const selectOptions = shippingRegions.map(({ shippingRegionId, shippingRegion }) => ({
    value: shippingRegionId,
    display: shippingRegion,
  }));
  const currentShippingTypes = shippingTypes
    .filter(({ shippingRegionId }) => shippingRegionId === selectedShippingRegion);

  return (
    <Wrapper>
      <Flex flexDirection="column">
        <SubHeader>
          Shipping Details
        </SubHeader>
        <Flex flexDirection="column">
          <Title>Shipping Region</Title>
          <Select
            options={selectOptions}
            handleChange={handleChange}
          />
        </Flex>
        <Flex flexDirection="column">
          <Title>Shipping Types</Title>
          <ShippingTypes
            shippingTypes={currentShippingTypes}
            handleChange={handleChange}
            shippingType={shippingType}
          />
        </Flex>
        <Button
          type={ButtonType.ROUNDED}
          handleClick={handleOrder}
        >
            Make Order
        </Button>
      </Flex>
    </Wrapper>
  );
}

OrderDeliveryForm.propTypes = {
  handleOrder: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  shippingRegions: PropTypes.arrayOf(
    PropTypes.shape({
      shippingRegionId: PropTypes.number.isRequired,
      shippingRegion: PropTypes.string.isRequired,
    }),
  ).isRequired,
  shippingTypes: PropTypes.arrayOf(
    PropTypes.shape({
      shippingId: PropTypes.number.isRequired,
      shippingType: PropTypes.string.isRequired,
      shippingCost: PropTypes.string.isRequired,
      shippingRegionId: PropTypes.number.isRequired,
    }),
  ).isRequired,
  shippingType: PropTypes.number.isRequired,
  shippingRegion: PropTypes.number.isRequired,
};

export default OrderDeliveryForm;

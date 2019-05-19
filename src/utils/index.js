import { color } from '../components/_settings/_variables';

export const generateCartId = () => `vsc-${Math.random().toString().slice(3, 9)}-${new Date().getFullYear()}`;

const colorMap = {
  White: color.LAVENDER,
  Black: color.BLACK,
  Red: color.CRIMSON,
  Orange: color.ORANGE_RED,
  Yellow: color.GOLD,
  Green: color.YELLOW_GREEN,
  Blue: color.CORN_FLOWER_BLUE,
  Indigo: color.DARK_TURQUOISE,
  Purple: color.BLUE_VIOLET,
};

export const getAttributeColor = attributeValue => colorMap[attributeValue];

export const getItemsCount = (items) => {
  const itemsCount = items
    .reduce((accumulator, { quantity }) => accumulator + quantity, 0);
  return Number.isNaN(itemsCount) ? 0 : itemsCount;
};

export const getItemsSubTotal = (items) => {
  const itemsSubtotal = items
    .reduce((accumulator, { subtotal }) => accumulator + Number.parseFloat(subtotal), 0);
  return Number.isNaN(itemsSubtotal) ? 0 : itemsSubtotal.toFixed(2);
};

export default generateCartId;

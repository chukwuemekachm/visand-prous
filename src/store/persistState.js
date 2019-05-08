const itemName = 'visand-prous-shop';

export const saveState = (state) => {
  const serialisedState = JSON.stringify(state);
  window.localStorage.setItem(itemName, serialisedState);
};

export const loadState = () => {
  const state = window.localStorage.getItem(itemName);
  const parsedState = state !== null && state !== undefined ? JSON.parse(state) : undefined;
  return parsedState;
};

export const clearState = () => window.localStorage.removeItem(itemName);

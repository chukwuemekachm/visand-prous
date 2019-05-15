const itemName = 'vs-shop';

export const saveState = (state) => {
  const serialisedState = JSON.stringify(state);
  window.sessionStorage.setItem(itemName, serialisedState);
};

export const loadState = () => {
  const state = window.sessionStorage.getItem(itemName);
  const parsedState = state !== null && state !== undefined ? JSON.parse(state) : undefined;
  return parsedState;
};

export const clearState = () => window.sessionStorage.removeItem(itemName);

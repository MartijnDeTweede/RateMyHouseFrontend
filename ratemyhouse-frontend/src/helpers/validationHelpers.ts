export const isFilledString = (string: string| undefined) => (
  typeof string !== 'undefined' && string !== null && string !== ''
);

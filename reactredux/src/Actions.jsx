
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const incrementLike = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementLike = () => {
  return {
    type: DECREMENT,
  };
};

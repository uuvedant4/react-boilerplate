export const INC = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const DEC = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

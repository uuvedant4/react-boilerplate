const initialState = 0;

const counterUpDown = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state > 0 ? state - action.payload : state;
    default:
      return state;
  }
};

export default counterUpDown;

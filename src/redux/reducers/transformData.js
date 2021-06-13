const initialState = {
  dataForShedule: {},
  isDone: false,
};

const transformData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRANSFORMDATA":
      return {
        ...state,
        dataForShedule: action.payload,
        isDone: true,
      };
    case "SET_IS_DONE":
      return {
        ...state,
        isDone: action.payload,
      };

    default:
      return state;
  }
};

export default transformData;

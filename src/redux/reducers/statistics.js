const initialState = {
  item: {},
  isLoaded: false,
  data: {},
  isLoadedData: false
};

const statistics = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    case "SET_STATISTICS":
      return {
        ...state,
        item: action.payload,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
        isLoadedData: true,
      };
    default:
      return state;
  }
};

export default statistics;
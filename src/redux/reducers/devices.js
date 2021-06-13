const initialState = {
  devices: [],
  isSetDevices: false
};

const devices = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DEVICES":
      return {
        ...state,
        devices: action.payload,
        isSetDevices: true
      };

    default:
      return state;
  }
};

export default devices;
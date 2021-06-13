export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchStatistics = () => (dispatch) => {
  fetch(
    `https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0`
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(setStatistics(data))
      dispatch(setLoaded(true));
    }).catch(e => {
      console.log(e)
    });
};


export const setStatistics = (item) => ({
  type: "SET_STATISTICS",
  payload: item,
});

export const setData = (item) => ({
  type: "SET_DATA",
  payload: item,
});


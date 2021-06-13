const transformData = (data, activeDevices) => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const resultArr = weekDays.reduce((acc, item) => {
    acc[`${item}`] = { undefined: 0, kid: 0, young: 0, adult: 0, old: 0 };
    return acc;
  }, {});

  data
    .reduce((acc, item, i) => {
      if (activeDevices[i]) {
        return [...acc, item.days];
      }
      return acc;
    }, [])
    .map((item) => {
      return item.map((item) => {
        const setDayData = (days) => {
          resultArr[`${days.day}`].young += days.age.young;
          resultArr[`${days.day}`].undefined += days.age.undefined;
          resultArr[`${days.day}`].kid += days.age.kid;
          resultArr[`${days.day}`].adult += days.age.adult;
          resultArr[`${days.day}`].old += days.age.young;
        };
        return setDayData(item);
      });
    });

  return resultArr;
};

export default transformData
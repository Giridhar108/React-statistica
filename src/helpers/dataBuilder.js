import getWeekDay from "./getWeekDay";

const getAgeVievs = (item) =>
  item.reduce((acc, i) => {
    acc[`${i.n}`] = i.v;
    return acc;
  }, {});

const getDays = (item) =>
  item.reduce((acc, i) => {
    acc.push({ day: getWeekDay(i.n), age: getAgeVievs(i.o) });
    return acc;
  }, []);

const dataBulder = (stat) => {
  const data = [];
  stat.map((item) => {
    return data.push({ idDevice: item.n, days: getDays(item.o) });
  });
  return data;
};

export default dataBulder;

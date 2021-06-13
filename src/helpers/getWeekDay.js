function getWeekDay(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[new Date(date).getDay()];
}

export default getWeekDay;

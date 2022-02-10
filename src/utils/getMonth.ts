import dayjs from "dayjs";

function getMonth(month = dayjs().month()): number[][] {
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, -1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;

  const dayMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount)).date();
    });
  });

  return dayMatrix;
}

export { getMonth };

/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
};

function isWeekend(day: Day): boolean {
  let workDay = day ? true : false;
  return workDay;
};

isWeekend(Day.WEDNESDAY);

export {};
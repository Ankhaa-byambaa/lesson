const d = new Date("2025-06-09");
const d2 = new Date("2025-08-09");
let now = Date.now("");
let years = Math.round(Date.now() / year);
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
// unuudur hed deh udur we
const days = [
  "sunday",
  " monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  " saturday",
];
let today = new Date("2025-08-01");
const findDDay = days[today.getDay()];

console.log("month1 = ", d.getMonth());
console.log("month2 =", d2.getMonth());
console.log("year1", d.getYear());
console.log("year2 =", d2.getYear());
console.log("day1 =", d.getDay());
console.log("day2 = ", d2.getDay());
console.log("date now = ", years);
console.log("now =", now);
console.log("today is = ", findDDay);

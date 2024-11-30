Date.prototype.getCurrentDate = function () {
  let year = this.getFullYear();
  let month = this.getMonth() + 1;
  let day = this.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return `${year}-${month}-${day}`;
};

Date.prototype.getCurrentDay = function () {
  let day = this.getDate();
  return `${day}`;
};

Date.prototype.getCurrentWeekday = function () {
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[this.getDay()];
};

Date.prototype.getCurrentMonth = function () {
  let month = new Array(11);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  return month[this.getMonth()];
};

Date.prototype.whatWeekday = function () {
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[this.getDay()];
};

Date.prototype.whatMonth = function () {
  const month = new Array(11);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  return month[this.getMonth()];
};

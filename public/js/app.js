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

const updateButton = document.getElementById("updateDetails");
const closeButton = document.getElementById("closeDialog");
const dialog = document.getElementById("modalDialog");
const dynamicImage = document.getElementById("dynamicImage");
const modalDialogLink = document.getElementById("modalDialogLink");

const images = [
  "../img/advent2.gif",
  "../img/advent3.gif",
  "../img/advent4.gif",
  "../img/advent5.gif",
  "../img/advent6.gif",
  "../img/advent7.gif",
  "../img/advent8.gif",
  "../img/advent9.gif",
];

let currentIndex = 0;
let currentDate = new Date();
let testDate = new Date("2024-12-01");

window.addEventListener("load", (event) => {
  const modalDialogP = document.querySelector("#modalDialog p");
  if (testDate.getCurrentMonth() == "December" && testDate.getCurrentDay() <= "24") {
    updateButton.innerHTML = testDate.getCurrentDay();
    const dayItem = dayItems.filter((item) => item.day == testDate.getCurrentDay());
    console.log(dayItem);

    if (dayItem.length > 0) {
      modalDialogLink.href = dayItem[0].link;
      modalDialogLink.textContent = "Dagens lucka";
      modalDialogP.textContent = dayItem[0].message;
    }
  } else if (testDate.getCurrentMonth() == "December" && testDate.getCurrentDay() > "24") {
    updateButton.innerHTML = "🖕😘";
    updateButton.style.fontSize = "100px";
  }
});

// Open the dialog when clicking the box
updateButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  dynamicImage.src = images[currentIndex];
  dialog.showModal();
});

// Close the dialog when clicking the close button
closeButton.addEventListener("click", () => {
  dialog.close();
});

// Close the dialog when pressing the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) {
    dialog.close();
  }
});

const dayItems = [
  {
    day: "1",
    link: "https://open.spotify.com/track/1prZ0pr6XoRCxcrC3MCL0M?si=81718b3d1da14999",
    message: "Älskar dig!",
  },
  {
    day: "2",
    link: "",
    message: "",
  },
  {
    day: "3",
    link: "",
    message: "",
  },
  {
    day: "4",
    link: "",
    message: "",
  },
  {
    day: "5",
    link: "",
    message: "",
  },
  {
    day: "6",
    link: "",
    message: "",
  },
  {
    day: "7",
    link: "",
    message: "",
  },
  {
    day: "8",
    link: "",
    message: "",
  },
  {
    day: "9",
    link: "",
    message: "",
  },
  {
    day: "10",
    link: "",
    message: "",
  },
  {
    day: "11",
    link: "",
    message: "",
  },
  {
    day: "12",
    link: "",
    message: "",
  },
  {
    day: "13",
    link: "",
    message: "",
  },
  {
    day: "14",
    link: "",
    message: "",
  },
  {
    day: "15",
    link: "",
    message: "",
  },
  {
    day: "16",
    link: "",
    message: "",
  },
  {
    day: "17",
    link: "",
    message: "",
  },
  {
    day: "18",
    link: "",
    message: "",
  },
  {
    day: "19",
    link: "",
    message: "",
  },
  {
    day: "20",
    link: "",
    message: "",
  },
  {
    day: "21",
    link: "",
    message: "",
  },
  {
    day: "22",
    link: "",
    message: "",
  },
  {
    day: "23",
    link: "",
    message: "",
  },
  {
    day: "24",
    link: "",
    message: "",
  },
];

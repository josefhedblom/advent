import { dayItems } from "./db.js";
import { images } from "./imagesList.js";
import "./DateHelper.js";

const calenderDay = document.getElementById("calenderDay");
const closeButton = document.getElementById("closeVideoDialog");

const modalVideo = document.getElementById("modalVideo");
const modalVideoSrc = document.getElementById("modalVideoSrc");

let currentIndex = 0;
let currentDate = new Date();

window.addEventListener("load", (event) => {
  if (currentDate.getCurrentMonth() == "December" && currentDate.getCurrentDay() <= "24") {
    calenderDay.innerHTML = currentDate.getCurrentDay();

    const dayItem = dayItems.filter((item) => item.day == currentDate.getCurrentDay());
  } else if (currentDate.getCurrentMonth() == "December" && currentDate.getCurrentDay() > "24") {
    calenderDay.innerHTML = "🖕😘";
    calenderDay.style.fontSize = "100px";
  }
});

calenderDay.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalVideoSrc.src = dayItems[currentIndex];
  modalVideo.showModal();
});

closeButton.addEventListener("click", () => {
  modalVideo.close();
});

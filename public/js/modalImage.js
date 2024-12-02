import { dayItems } from "./db.js";
import { images } from "./imagesList.js";
import "./DateHelper.js";

const calenderDay = document.getElementById("calenderDay");
const closeButton = document.getElementById("closeDialog");

const modalImg = document.getElementById("modalImg");
const modalImgMessage = document.getElementById("modalMessage");
const modalLink = document.getElementById("modalLink");
const modalImage = document.getElementById("modalImage");

let currentIndex = 0;
let currentDate = new Date();

window.addEventListener("load", (event) => {
  if (currentDate.getCurrentMonth() == "December" && currentDate.getCurrentDay() <= "24") {
    calenderDay.innerHTML = currentDate.getCurrentDay();

    const dayItem = dayItems.filter((item) => item.day == currentDate.getCurrentDay());

    if (dayItem.length > 0) {
      modalLink.href = dayItem[0].link;
      modalLink.textContent = "Dagens lucka";
      modalImgMessage.textContent = dayItem[0].message;
      currentIndex = (currentIndex + 1) % images.length;
      modalImg.src = images[currentIndex];
    }
  } else if (currentDate.getCurrentMonth() == "December" && currentDate.getCurrentDay() > "24") {
    calenderDay.innerHTML = "🖕😘";
    calenderDay.style.fontSize = "100px";
  }
});

calenderDay.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImage.src = images[currentIndex];
  modalImg.showModal();
});

closeButton.addEventListener("click", () => {
  modalImg.close();
});

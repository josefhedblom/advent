import { dayItems } from "./db.js";
import { images } from "./imagesList.js";
import "./DateHelper.js";

const updateButton = document.getElementById("updateDetails");
const closeButton = document.getElementById("closeDialog");
const dialog = document.getElementById("modalDialog");
const dynamicImage = document.getElementById("dynamicImage");
const modalDialogLink = document.getElementById("modalDialogLink");

let currentIndex = 0;
let currentDate = new Date();
//let testDate = new Date("2024-12-01");

window.addEventListener("load", (event) => {
  const modalDialogP = document.querySelector("#modalDialog p");
  if (currentDate.getCurrentMonth() == "December" && currentDate.getCurrentDay() <= "24") {
    updateButton.innerHTML = currentDate.getCurrentDay();
    const dayItem = dayItems.filter((item) => item.day == currentDate.getCurrentDay());

    if (dayItem.length > 0) {
      modalDialogLink.href = dayItem[0].link;
      modalDialogLink.textContent = "Dagens lucka";
      modalDialogP.textContent = dayItem[0].message;
    }
  } else if (currentDate.getCurrentMonth() == "December" && currentDate.getCurrentDay() > "24") {
    updateButton.innerHTML = "🖕😘";
    updateButton.style.fontSize = "100px";
  }
});

updateButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  dynamicImage.src = images[currentIndex];
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) {
    dialog.close();
  }
});

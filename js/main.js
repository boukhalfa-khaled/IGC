const openItemsBtn = document.getElementById("open__items-btn");

const navItems = document.getElementById("nav__items");

document.onclick = function (e) {
  if (e.target.id !== "nav__items" && e.target.id !== "open__items-btn") {
    openItemsBtn.classList.remove("active");
    navItems.classList.remove("active");
  }
  if (
    e.target.id !== "certificateList" &&
    e.target.id !== "createCertificate"
  ) {
    certificateList.classList.remove("active");
  }
};

openItemsBtn.onclick = function () {
  openItemsBtn.classList.toggle("active");
  navItems.classList.toggle("active");
};

const imageArray = Array.from(document.querySelectorAll("img[data-number]"));

function updateDataNumber() {
  imageArray.forEach((image) => {
    let currentNumber = parseInt(image.dataset.number);
    currentNumber = currentNumber === imageArray.length ? 1 : currentNumber + 1;
    image.dataset.number = currentNumber;
  });
}

setInterval(updateDataNumber, 5000);

const createCertificate = document.querySelector("#createCertificate");
const certificateList = document.querySelector(".certificateList");
createCertificate.onclick = function () {
  certificateList.classList.toggle("active");
  console.log(createCertificate);
  console.log(certificateList);
};

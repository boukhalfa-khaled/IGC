let nums = document.querySelectorAll(".statistics .col .number");
let section = document.querySelector(".landingPage");
let started = false;

window.onscroll = function () {
  console.log(scrollY);
  if (window.scrollY - 150 >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let time = 2000 / goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
      el.textContent = "+" + el.textContent;
    }
  }, time);
}

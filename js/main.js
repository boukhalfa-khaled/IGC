const imageArray = Array.from(document.querySelectorAll("img[data-number]"));

// console.log(imageArray);

function updateDataNumber() {
  // Increment the data-number attribute and wrap around if necessary
  imageArray.forEach((image) => {
    let currentNumber = parseInt(image.dataset.number);
    currentNumber = currentNumber === imageArray.length ? 1 : currentNumber + 1;
    image.dataset.number = currentNumber;
  });
}

// Set up an interval to change images every 1 second
// setInterval(updateDataNumber, 1000);

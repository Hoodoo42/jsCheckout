// this if else is else block is determining the value and setting a matching colour block.
// else there is no colour value set, it displays a message saying so.

let cookieColor = Cookies.get(`chosenColor`);
if (cookieColor === `Red`) {
  let checkoutMain = document.getElementById(`checkoutMain`);
  checkoutMain[`innerHTML`] = `<div id="redBox"></div>`;
  let redBox = document.getElementById(`redBox`);
  redBox[`style`][`height`] = `100px`;
  redBox[`style`][`width`] = `100px`;
  redBox[`style`][`background`] = `red`;
} else if (cookieColor === `Purple`) {
  let checkoutMain = document.getElementById(`checkoutMain`);
  checkoutMain[`innerHTML`] = `<div id="purpleBox"></div>`;
  let redBox = document.getElementById(`purpleBox`);
  redBox[`style`][`height`] = `100px`;
  redBox[`style`][`width`] = `100px`;
  redBox[`style`][`background`] = `purple`;
} else if (cookieColor === `Blue`) {
  let checkoutMain = document.getElementById(`checkoutMain`);
  checkoutMain[`innerHTML`] = `<div id="blueBox"></div>`;
  let redBox = document.getElementById(`blueBox`);
  redBox[`style`][`height`] = `100px`;
  redBox[`style`][`width`] = `100px`;
  redBox[`style`][`background`] = `blue`;
} else {
  checkoutMain.insertAdjacentHTML(
    "afterbegin",
    `<h3>No colour was picked</h3>`
  );
}

// this function is setting an eventListener for a click on a button that will delete the variable
// within the set cookie.
function deleteSelection(details) {
  Cookies.remove(`chosenColor`);
}

let deleteSelectionButton = document.getElementById(`deleteSelection`);
deleteSelectionButton.addEventListener(`click`, deleteSelection);

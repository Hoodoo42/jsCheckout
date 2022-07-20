// a set of functions that will set the value depending on wich  element is calling the function
//through its eventListener.

function redCookie(details) {
  Cookies.set(`chosenColor`, `Red`);
}
function purpleCookie(details) {
  Cookies.set(`chosenColor`, `Purple`);
}
function blueCookie(details) {
  Cookies.set(`chosenColor`, `Blue`);
}

// these are setting the tags into a variable by its id, and attaching an eventListener to call the above functions
let red = document.getElementById(`redButton`);
red.addEventListener(`click`, redCookie);

let purple = document.getElementById(`purpleButton`);
purple.addEventListener(`click`, purpleCookie);

let blue = document.getElementById(`blueButton`);
blue.addEventListener(`click`, blueCookie);

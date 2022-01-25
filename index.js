function ageInDays() {
  var birthYear = prompt("Enter your birth year");
  var currentYear = new Date().getFullYear();
  var yourAge = (currentYear - birthYear) * 365;

  var h1 = document.createElement("h1");
  var textarea = document.createTextNode("Your age " + yourAge + " years old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textarea);
  document.getElementById("result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2

function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-container-2");
  image.src = "https://cdn2.thecatapi.com/images/zyW4wflo3.jpg";
  div.appendChild(image);
}

// Challenge 3

function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  console.log(humanChoice);

  botChoice = numberToChoice(randToRpsInt());
  console.log("computer choice: ", botChoice);

  result = decideWinner(humanChoice, botChoice);
  console.log(result);

  var message = finalMessage(result);
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  let a = ["rock", "paper", "scissors"];
  return a[number];
}

function decideWinner(yourChoice, computerChoice) {
  console.log(yourChoice, computerChoice);
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
  };
  console.log(rpsDatabase[yourChoice]);
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  console.log(yourScore);
  var computerScore = rpsDatabase[computerChoice][yourChoice];
  console.log(computerScore);

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied!", color: "blue" };
  } else {
    return { message: "You Win!", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var computerDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src ='" +
    imageDatabase[humanImageChoice] +
    "' style='height:50% width:40%'; >";

  messageDiv.innerHTML =
    " <h1 style='color: " +
    finalMessage["color"] +
    "; font-size:60px padding:30px;'>" +
    finalMessage["message"] +
    "</h1>";
  // console.log(
  //   "<img src= '" + imageDatabase[humanImageChoice] + "'height=40% width=30%> "

  computerDiv.innerHTML =
    "<img src= '" + imageDatabase[botImageChoice] + "'height=40% width=30% > ";

  document.getElementById("flex-rps-div").appendChild(humanDiv);
  document.getElementById("flex-rps-div").appendChild(messageDiv);
  document.getElementById("flex-rps-div").appendChild(computerDiv);
}

// Challenge 4
var all_buttons = document.getElementsByTagName("button");
for 
console.log("copyAllButtons", copyAllButtons);
function buttonColorChange(buttonId) {
  if (buttonId.value === "red") {
    allButtonsRed();
  } else if (buttonId.value === "green") {
    allButtonsGreen();
  } else if (buttonId.value === "random") {
    randomColorButton();
  } else if (buttonId.value === "reset") {
    resetAllButton();
  }
}

function allButtonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function allButtonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function randomColorButton() {
  var colorArray = ["btn-primary", "btn-danger", "btn-warning", "btn-success"];

  for (let i = 0; i < all_buttons.length; i++) {
    var randomColor = Math.floor(Math.random() * 4);
    console.log(colorArray[randomColor]);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(colorArray[randomColor]);
  }
}
// function copyButtons() {
//   var all_buttons = document.querySelectorAll("button");
//   console.log("allbutton", all_buttons);
//   var copyAllButtons = [];
//   for (let i = 0; i < all_buttons.length; i++) {
//     copyAllButtons.push(all_buttons[i]);
//   }

//   return copyAllButtons;
// }

function resetAllButton() {
  console.log("Copy in reset all buttons", copyAllButtons);
  for (let i = 0; i < all_buttons.length; i++) {
    // console.log(copyAllButtons[i].classList);
    // console.log("okkkk", copyAllButtons[i].classList[1]);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    console.log("Copy in reset-all loop", copyAllButtons);
    all_buttons[i].classList.add(copyAllButtons[i].classList[1]);
  }
}

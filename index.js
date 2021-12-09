//Selectors
const billAmount = document.getElementById("billAmt");
const cashGiven = document.getElementById("cash");
const amtWarning = document.getElementById("billAmtWarn");
const cashWarning = document.getElementById("cashWarn");
const getChangeBtn = document.getElementById("getChangeBtn");
const noteCount = document.querySelectorAll(".count");

// Input Value
let avaliableNotes = [2000, 500, 100, 20, 10, 5, 1];

//Event Listner
billAmount.addEventListener("keyup", getAmount);
cashGiven.addEventListener("keyup", getCash);
getChangeBtn.addEventListener("click", getChangeFn);

for (i = 1; i <= 7; i++) {
  let hex = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("c" + i).style.color = "#" + hex;
  document.getElementById("inner-c" + i).style.borderColor = "#" + hex;
}

// Functions
function getAmount(event) {
  if (event.target.value <= 0) {
    amtWarning.style.visibility = "visible";
    cashGiven.style.visibility = "hidden";
  } else {
    amtWarning.style.visibility = "hidden";
    cashGiven.style.visibility = "visible";
  }
}

function getCash(event) {
  if (event.target.value < billAmount.value) {
    cashWarning.style.visibility = "visible";
  } else {
    cashWarning.style.visibility = "hidden";
  }
}
function getChangeFn(event) {
  event.preventDefault();
  let cashToReturn = cashGiven.value - billAmount.value;
  if (cashToReturn >= 0) {
    for (let i = 0; i < avaliableNotes.length; i++) {
      const numberOfNotes = Math.trunc(cashToReturn / avaliableNotes[i]);
      cashToReturn %= avaliableNotes[i];
      noteCount[i].innerText = numberOfNotes;
    }
  } else {
    cashWarning.style.visibility = "visible";
  }
}

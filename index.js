//Selectors
let billAmount = document.getElementById("billAmt");
let cashGiven = document.getElementById("cash");
let amtWarning = document.getElementById("billAmtWarn");
let cashWarning = document.getElementById("cashWarn");
let getChangeBtn = document.getElementById("getChangeBtn");
let noteCount = document.querySelectorAll(".count");

let avaliableNotes = [2000, 500, 100, 20, 10, 5, 1];
//Event Listner
billAmount.addEventListener("keyup", getAmount);
cashGiven.addEventListener("keyup", getCash);
getChangeBtn.addEventListener("click", getChangeFn);

for (i = 1; i <= 9; i++) {
  document.getElementById("c" + i).style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Functions
function getAmount(event) {
  let amt = event.target.value;
  if (amt <= 0) {
    amtWarning.style.visibility = "visible";
  } else {
    cashGiven.style.visibility = "visible";
    amtWarning.style.visibility = "hidden";
  }
}

function getCash(event) {
  let cash = event.target.value;

  if (cash < billAmount.value) {
    cashWarning.style.visibility = "visible";
  } else {
    cashWarning.style.visibility = "hidden";
    getChangeBtn.style.visibility = "visible";
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
    getChangeBtn.style.visibility = "hidden";
  }
}

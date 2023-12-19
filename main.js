// Change the entire js
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const hintText = document.getElementById("hintText");
const attemptsLeft = document.getElementById("attemptsLeft");
const container = document.getElementById("container");
const ruleBox = document.getElementById("ruleBox");
const rules = document.getElementById("rule");
const restart = document.getElementById("restart");
const mainDiv = document.getElementsByTagName("main");

var attempts = 9;
let i = 0;
var num = Math.floor(Math.random() * 100);

// rotate container
const rotateContainerAndHideRuleBox = () => {
  container.style.transform = "rotateY(180deg)";
  container.style.transition = "1s ease-in";
  ruleBox.style.height = "0px";
  rules.style.display = "none";
  ruleBox.firstElementChild.style.display = "none";
  setTimeout(() => {
    ruleBox.style.width = "0px";
  }, 600);
  ruleBox.style.transition = "1.1s ease-in";
  setTimeout(() => {
    ruleBox.style.display = "none";
  }, 1800);
};

// celebrate function
const celebrate = () => {
  rotateContainerAndHideRuleBox();
};

// loser function

const loser = () => {
  rotateContainerAndHideRuleBox();
};

const input = function () {
  i = userInput.value;
  // console.log(i);
  if (Number(i) || i.length != 0) {
    if (i < num) {
      hintText.innerText = "Hint : Greater value please ! !";
      attemptsLeft.innerText = --attempts;
    } else if (i > num) {
      hintText.innerText = "Hint : Smaller value please ! !";
      attemptsLeft.innerText = --attempts;
    } else if (i == num) {
      // hintText.innerText = "Hurray Won With " + --attempts + " attempts";
      // attemptsLeft.innerText = "";
      celebrate();
    }
    if (attempts == 0) {
      loser();
    }
  }
};

const clickHandler = () => {
  submitBtn.disabled = true;
  setTimeout(() => {
    submitBtn.disabled = false;
  }, 1500);
};

submitBtn.addEventListener("click", () => {
  input();
  clickHandler();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (ruleBox.style.display != "none") {
      submitBtn.click();
    } else {
      restart.click();
    }
  }

  if ("0" <= e.key <= "9") {
    userInput.focus();
  }
});

const plusBtn = document.querySelectorAll(".plus");
const minusBtn = document.querySelectorAll(".minus");
const answer1 = document.querySelector(".answer-1");
const answer2 = document.querySelector(".answer-2");
const answer3 = document.querySelector(".answer-3");
const answer4 = document.querySelector(".answer-4");

let isClick = false;
plusBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const plusBtnId = e.srcElement.id;
    showDiv(plusBtnId);
  });
});

minusBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const minusBtnId = e.srcElement.id;
    hideDiv(minusBtnId);
  });
});

function show(btnId) {
  plusBtn[btnId - 1].style.display = "none";
  minusBtn[btnId - 1].style.display = "block";
  minusBtn[btnId - 1].style.color = "black";
  isClick = true;
}

function hide(btnId) {
  plusBtn[btnId - 1].style.display = "block";
  minusBtn[btnId - 1].style.display = "none";
}

const showDiv = (id) => {
  switch (id) {
    case "1":
      answer1.style.display = "block";
      show(id);
      break;
    case "2":
      answer2.style.display = "block";
      show(id);
      break;
    case "3":
      answer3.style.display = "block";
      show(id);
      break;
    case "4":
      answer4.style.display = "block";
      show(id);
  }
};

const hideDiv = (id) => {
  switch (id) {
    case "1":
      answer1.style.display = "none";
      hide(id);
      break;

    case "2":
      answer2.style.display = "none";
      hide(id);
      break;

    case "3":
      answer3.style.display = "none";
      hide(id);
      break;

    case "4":
      answer4.style.display = "none";
      hide(id);
      break;
  }
};

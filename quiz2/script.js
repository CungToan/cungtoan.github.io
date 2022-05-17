let nextBtn = $(".next-quest");
let questCount = 0;
let quests = 1;
let timeCount = document.querySelector(".time-count");
let counter;
let timing = 15;
let timeRuns = document.querySelector("#quiz-box .time-line");
let widthValue = 0;
let resultBox = document.getElementById("finish-box");
let score = 0;

function showQuestion(index) {
  let questText = $(".main-quest .title-quest");
  let optionList = $(".options-list");
  let questTag = "<span>" + questions[index].question + "</span>";
  let optionTag =
    '<div class="info"><span class="quiz-text">' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="info"><span class="quiz-text">' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="info"><span class="quiz-text">' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="info"><span class="quiz-text">' +
    questions[index].options[3] +
    "</span></div>";
  $(questText).html(questTag);
  $(optionList).html(optionTag);
  let choice = document.querySelectorAll(".info");
  for (let i = 0; i < choice.length; i++) {
    choice[i].setAttribute("onclick", "optionSelected(this)");
  }
}
showQuestion(0);
totalQuest(1);
startTimer(timing);
timeLineRuns(0);

$(nextBtn).on("click", function () {
  if (questCount < questions.length - 1) {
    questCount++;
    quests++;
    showQuestion(questCount);
    totalQuest(quests);
    clearInterval(counter);
    startTimer(timing);
    clearInterval(counterLine);
    timeLineRuns(widthValue);
    document.querySelector(".next-quest").style.display = "none";
  } else {
    showResultBox();
  }
});

function totalQuest(index) {
  let totalQuestCount = $(".footer .quest-check");
  let totalQuestCountTag =
    '<p class="numb">' +
    index +
    '</p><p>trên</p><p class="numb">' +
    questions.length +
    "</p><p>câu hỏi</p>";
  $(totalQuestCount).html(totalQuestCountTag);
}

let correctIcon = '<i class="fa-solid fa-check"></i>';
let incorrectIcon = '<i class="fa-solid fa-xmark"></i>';

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let ans = answer.textContent;
  let correctAns = questions[questCount].answer;
  let allOptions = document.querySelector(".options-list");
  if (ans == correctAns) {
    score += 1;
    console.log(score);
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", correctIcon);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", incorrectIcon);
    for (let i = 0; i < allOptions.children.length; i++) {
      if (allOptions.children[i].textContent == correctAns) {
        allOptions.children[i].setAttribute("class", "info correct");
      }
    }
  }

  // When seclected disabled all options
  for (let i = 0; i < allOptions.children.length; i++) {
    allOptions.children[i].classList.add("disabled");
  }

  document.querySelector(".next-quest").style.display = "block";
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let counterTime = timeCount.textContent;
      timeCount.textContent = "0" + counterTime;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = "00";
    }
  }
}

function timeLineRuns(time) {
  counterLine = setInterval(timer, 29);

  function timer() {
    time += 1;
    timeRuns.style.width = time + "px";
    if (time > 500) {
      clearInterval(counterLine);
    }
  }
}

function showResultBox() {
  let resultTag =
    '<p class="noti">Bạn đã hoàn thành Quiz</p><span><p>Bạn đã đúng</p><p class="numb-result">' +
    score +
    '</p><p>trên</p><p class="numb-result">' +
    questions.length +
    "</p><p>câu hỏi</p>";
  document.querySelector("#quiz-box").classList.add("hideBox");
  resultBox.classList.add("activeResult");
  document.querySelector(".result-quiz").innerHTML = resultTag;
}

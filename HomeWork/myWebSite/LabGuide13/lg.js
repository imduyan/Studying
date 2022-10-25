let text1 = [];
document.getElementById("notice").value = `Press the Start Counting button`;
var countCorrect = 0;
var countIncorrect = 0;
var percent = 0;

var NumberRandom = 16;

document.getElementById("btst").onclick = function () {
  NumberRandom = Math.ceil(Math.random() * 20);
  for (i = 0; i < NumberRandom; i++) {
    text1.push(`A `);
  }
  document.getElementById("ta").value = text1.join("");
  text1 = [];
};

document.getElementById("check").onclick = function () {
  let text2 = document.getElementById("guest").value;
  if (parseInt(text2) == parseInt(NumberRandom)) {
    document.getElementById("notice").value = `Correct Counting`;
    countCorrect += 1;
  } else {
    document.getElementById(
      "notice"
    ).value = `The Correct number is ${NumberRandom}`;
    countIncorrect += 1;
  }
  percent = Math.round(
    (countCorrect / (countCorrect + countIncorrect)) * 100,
    2
  );
  console.log(countCorrect);
  document.getElementById("countCorrect").value = countCorrect;
  document.getElementById("countIncorrect").value = countIncorrect;
  document.getElementById("Percent").value = percent;
};

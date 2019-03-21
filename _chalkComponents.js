// _chalkComponents.js
const chalk = require("chalk");

function correct(...information) {
  // return l(
  //   `${chalk.white(nLines(...information))}`
  // )
  return console.log(
    "Correct Answer" + `: [${chalk.italic.white(...information)}]`
  );
}
function incorrect(...information) {
  return console.log(
    "Incorrect Answer" + `: [${chalk.italic.red(...information)}]`
  );
}

function doubleCheck(information, anw) {
  console.log(
    chalk.yellow("Answer:" + information),
    "[" + chalk.white(anw) + "]"
  );
}

module.exports = {
  correct,
  incorrect,
  doubleCheck
};

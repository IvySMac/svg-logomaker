function Question(questionText, answer) {
    this.questionText = questionText;
    this.answer = answer;
}

const newQuestion = new Question("Who shot first", "Han Solo");

console.log(newQuestion.questionText);
console.log(newQuestion.answer);

const secondQuestion = new Question("what color is the sky?", "Blue");
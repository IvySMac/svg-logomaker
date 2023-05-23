// function Question(questionText, answer) {
//     this.questionText = questionText;
//     this.answer = answer;
// }

class Question {
    questionText;
    answer;

    constructor(questionText, answer) {
        this.questionText=questionText;
        this.answer=answer;
    }
}

const newQuestion = new Question("What shape do you want?", "Circle");

console.log(newQuestion.questionText);
console.log(newQuestion.answer);

const secondQuestion = new Question("What color do you want the circle to be?", "Green");

console.log(secondQuestion.questionText);
console.log(secondQuestion.answer);

const thirdQuestion = new Question("What do you want the text to say?", "SVG");

console.log(thirdQuestion.questionText);
console.log(thirdQuestion.answer);
import readlineSync from 'readline-sync';
import play from '../src/index.js';

const rule = "What is the result of the expression?";

const calcGame = () => {
    const firstNumber = Math.floor(Math.random() * (100 - 0)) + 0;
    const secondNumber = Math.floor(Math.random() * (100 - 0)) + 0;
    const operator = Math.floor(Math.random() * (3 - 0)) + 0;
    const operators = ['+', '-', '*'];
    console.log(`Question: ${firstNumber}${operators[operator]}${secondNumber}`);
    const answer = readlineSync.question('Your answer:  ');
    let correctAnswer;
    switch (operator) {
        case 0:
            correctAnswer = firstNumber + secondNumber;
            break;
        case 1:
            correctAnswer = firstNumber - secondNumber;
            break;
        case 2:
            correctAnswer = firstNumber * secondNumber;
            break;
        default:
            console.log('momo');
    }
    if (correctAnswer === parseInt(answer, 10)) {
       return true;
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${play.userName}!`);
        return false;
    }
};


export default {rule, calcGame};
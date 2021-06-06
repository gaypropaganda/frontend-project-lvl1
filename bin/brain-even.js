#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const IsEvenGame = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let correctAnswers = 0;
    while (correctAnswers < 3) {
        const number = Math.floor(Math.random() * (100 - 0)) + 0;
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer:  ');
        if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
            correctAnswers += 1;
        } else {
            if (answer === 'yes') {
                console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
            } else {
                console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
            }
            correctAnswers = 0;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};

IsEvenGame();

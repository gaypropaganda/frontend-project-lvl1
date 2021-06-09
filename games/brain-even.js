
import readlineSync from 'readline-sync';
import play from '../src/index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const IsEvenGame = () => {
    const number = Math.floor(Math.random() * (100 - 0)) + 0;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:  ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
        return true;
    } else {
        if (answer === 'yes') {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${play.userName}!`);
            return false;
        } else {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${play.userName}!`);
            return false;
        }
        return false;
    }
};

export default {rule, IsEvenGame};
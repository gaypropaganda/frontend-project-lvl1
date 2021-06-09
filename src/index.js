import readlineSync from 'readline-sync';

let userName;

const Welcome = () => {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};

const Congratulations = () => {
    console.log(`Congratulations, ${userName}!`);
};

const play = (game, rules) => {
    Welcome();
    console.log(rules);
    let correctAnswers = 0;
    while (correctAnswers < 3) {
        if (game()) {
            correctAnswers += 1;
        } else {
            correctAnswers = 0;
        }
    }
    Congratulations();
};

export default { userName, play };

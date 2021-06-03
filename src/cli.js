import readlineSync from 'readline-sync';

export const Welcome = () => {
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}
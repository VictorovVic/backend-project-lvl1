import readlineSync from 'readline-sync';

export const toGreet = () => {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${actual}!`);
};





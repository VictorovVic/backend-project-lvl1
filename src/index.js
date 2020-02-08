import readlineSync from 'readline-sync';

const toAskName = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  const actual = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${actual}!\n`);
};

const getRandom = () => Math.floor(Math.random() * 100);

const isEvenNumber = () => {
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${getRandom()}`);
    readlineSync.question('Your answer: ');
    console.log('Correct!');
  }
  return console.log('Congratulations, SAM!');
};

export { toAskName as default, isEvenNumber };

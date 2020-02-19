import { getRandom } from '../index.js';

const gcd = (randomNumber1, randomNumber2) => { // brain-gcd
  const maxNumber = Math.max(randomNumber1, randomNumber2);
  let resultGcd = 1;
  for (let i = 2; i <= maxNumber; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) resultGcd = i;
  }
  return String(resultGcd);
};
const gameGcd = () => {
  const randomNumber1 = getRandom(100);
  const randomNumber2 = getRandom(100);
  const correctAnswer = gcd(randomNumber1, randomNumber2);
  const expression = `${randomNumber1} ${randomNumber2}`;
  console.log(`Question: ${expression}`);
  return correctAnswer;
};

export { gameGcd as default };

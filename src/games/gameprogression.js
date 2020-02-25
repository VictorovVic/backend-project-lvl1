import runEngine, { getRandom, askPlayerQuestion } from '../index.js';

const questionToPlayer = 'What number is missing in the progression?';
const getProgression = (beginProg, diff) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression[i] = beginProg + diff * i;
  }
  return progression;
};

const runGameProgression = () => {
  const getCorrectAswer = () => {
    const beginRangeRandom = 0;
    const endRangeRandom = 100;
    const beginRangeRandomStep = 0;
    const endRangeRandomStep = 10;
    const beginProg = getRandom(beginRangeRandom, endRangeRandom);
    const diffProg = getRandom(beginRangeRandomStep, endRangeRandomStep);
    const hiddenNumber = getRandom(beginRangeRandomStep, endRangeRandomStep);
    const progression = getProgression(beginProg, diffProg);
    const correctAnswer = String(progression[hiddenNumber]);
    progression[hiddenNumber] = '..';
    askPlayerQuestion(progression.join(' '));
    return correctAnswer;
  };
  runEngine(getCorrectAswer, questionToPlayer);
};

export { runGameProgression as default };

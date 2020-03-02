import runEngine, { getRandom } from '../index.js';

const questionGame = 'What number is missing in the progression?';
const getProgression = (beginProg, diff) => {
  const progression = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = beginProg + diff * i;
  }
  return progression;
};

const runGameProgression = () => {
  const questionAndCorrectAnswer = {};
  const getCorrectAnswer = () => {
    const beginRangeRandomStep = 1;
    const endRangeRandomStep = 9;
    const beginProgression = getRandom();
    const diffProgression = getRandom(beginRangeRandomStep, endRangeRandomStep);
    const indexHiddenNumber = getRandom(beginRangeRandomStep, endRangeRandomStep);
    const progression = getProgression(beginProgression, diffProgression);
    const correctAnswer = String(progression[indexHiddenNumber]);
    progression[indexHiddenNumber] = '..';
    questionAndCorrectAnswer.questionToPlayer = progression.join(' ');
    questionAndCorrectAnswer.correctAnswer = correctAnswer;
    return questionAndCorrectAnswer;
  };
  runEngine(getCorrectAnswer, questionGame);
};

export { runGameProgression as default };

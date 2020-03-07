import startResponseProcessing from '../index.js';
import getRandom from '../random.js';

const description = 'What number is missing in the progression?';

const getProgression = (beginProg, diff) => {
  const progression = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = beginProg + diff * i;
  }
  return progression;
};

const getCorrectAnswer = () => {
  const questionAndCorrectAnswer = {};
  const beginProgression = getRandom();
  const diffProgression = getRandom();
  const progression = getProgression(beginProgression, diffProgression);
  const hiddenNumberIndex = getRandom(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = '..';
  questionAndCorrectAnswer.questionToPlayer = progression.join(' ');
  questionAndCorrectAnswer.correctAnswer = correctAnswer;
  return questionAndCorrectAnswer;
};

const runGameProgression = () => startResponseProcessing(getCorrectAnswer, description);

export { runGameProgression as default };

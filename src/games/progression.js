import engine from '../index.js';
import getRandom from '../random.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (beginProg, diff) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = beginProg + diff * i;
  }
  return progression;
};

const getCorrectAnswer = () => {
  const beginProgression = getRandom();
  const diffProgression = getRandom();
  const progression = getProgression(beginProgression, diffProgression);
  const hiddenNumberIndex = getRandom(0, progressionLength);
  const correctAnswer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

const runGameProgression = () => engine(getCorrectAnswer, description);

export { runGameProgression as default };

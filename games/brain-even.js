/**
 * Модуль игры "Проверка на чётность"
 */
import { showRandomNumber, getKeyByValue } from '../src/utils.js';

// Вспомогательные переменные
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const Limit = {
  LEFT: 5,
  RIGHT: 25,
};
const answerMap = {
  no: false,
  yes: true,
};

/**
 * Функция проверки числа на четность
 * @param {number} num
 * @returns {boolean}
 */
const isEven = (num) => !(num % 2) && num > 0;

/**
 * Основная функция
 * @returns {Object}
 */
const evenGame = () => {
  // Получаем рандомное число
  const randNum = showRandomNumber(Limit.LEFT, Limit.RIGHT);

  // Формируем выражение
  const expression = `${randNum}`;

  // Получаем правильный ответ на вопрос
  const answer = getKeyByValue(answerMap, isEven(randNum));

  return {
    rule,
    answer,
    expression,
  };
};

export default evenGame;

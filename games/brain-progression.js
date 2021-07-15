/**
 * Модуль игры "Арифметическая прогрессия"
 */
import { getRandomNum } from '../src/utils.js';
import startEngine from '../src/engine.js';

// Вспомогательные переменные
const rule = 'What number is missing in the progression?';
const limit = {
  MIN: 5,
  MAX: 10,
};

/**
 * Функция получения арифметической прогрессии
 * @param {number} diff
 * @param {number} startNumber
 * @param {number} length
 * @returns {Object}
 */
const getProg = (diff, startNumber, length) => {
  const prog = Array.from(Array(length), (_, i) => startNumber + diff * i);
  return prog;
};

/**
 * Основная функция
 * @returns {Object}
 */
const getProgGameOptions = () => {
  // Получаем числа: размер прогрессии, начальное число, разницу и положение "скрытого" элемента
  const length = getRandomNum(limit.MIN, limit.MAX);
  const diff = getRandomNum(-limit.MIN, limit.MAX);
  const startNumber = getRandomNum(limit.MIN, limit.MAX);
  const missingIndex = getRandomNum(0, length - 1);

  // Получаем прогрессию
  const progression = getProg(diff, startNumber, length);

  // Получаем правильный ответ на вопрос
  const answer = progression[missingIndex];

  // Формируем выражение
  progression[missingIndex] = '...';
  const expression = progression.join('');

  return {
    answer,
    expression,
  };
};

/**
 * Функция запуска игры
 * @returns {undefined}
 */
const startProgGame = () => startEngine(rule, getProgGameOptions);

export default startProgGame;

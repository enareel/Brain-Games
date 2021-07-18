/**
 * Модуль игры "Арифметическая прогрессия"
 */
import { getRandomNum } from './utils.js';
import startEngine from './engine.js';

// Вспомогательные переменные
const rule = 'What number is missing in the progression?';
const limit = {
  MIN: 5,
  MAX: 10,
};

/**
 * Функция получения арифметической прогрессии
 * @param {number} step
 * @param {number} startNumber
 * @param {number} length
 * @returns {Object}
 */
const getProg = (step, startNumber, length) => {
  const prog = Array.from(Array(length), (_, i) => startNumber + step * i);
  return prog;
};

/**
 * Функция формирования выражения на основе прогрессии
 * и индекса "спрятанного" элемента
 * @param {Array} prog
 * @param {number} index
 */
const makeExpression = (prog, index) => {
  const progression = prog;
  progression[index] = '..';
  return progression.join(' ');
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
  const answer = String(progression[missingIndex]);

  // Формируем выражение
  const expression = makeExpression(progression, missingIndex);

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

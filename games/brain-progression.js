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
 * Функция расчета арифметической прогрессии
 * @param {number} length
 * @param {number} index
 * @returns {Object}
 */
const makeProg = (length, index) => {
  // Осуществляем расчеты
  const diff = getRandomNum(-limit.MIN, limit.MAX);
  const startNumber = getRandomNum(limit.MIN, limit.MAX);
  const prog = Array.from(Array(length), (_, i) => startNumber + diff * i);
  const missingValue = prog[index];

  // Формируем выражение
  prog[index] = '..';
  const expression = prog.join(' ');

  return {
    expression,
    answer: String(missingValue),
  };
};

/**
 * Основная функция
 * @returns {Object}
 */
const progGame = () => {
  // Получаем рандомные числа: размер прогрессии и положение "скрытого" элемента
  const length = getRandomNum(limit.MIN, limit.MAX);
  const missingIndex = getRandomNum(0, length - 1);

  // Получаем выражение и ответ
  const { expression, answer } = makeProg(length, missingIndex);

  return {
    rule,
    answer,
    expression,
  };
};

/**
 * Функция запуска игры
 * @returns {undefined}
 */
const startProgGame = () => startEngine(progGame);

export default startProgGame;

/**
 * Модуль игры "Арифметическая прогрессия"
 */
import { showRandomNumber } from '../src/utils.js';

// Вспомогательные переменные
const rule = 'What number is missing in the progression?';
const Limit = {
  LEFT: 5,
  RIGHT: 10,
};

/**
 * Функция расчета арифметической прогрессии
 * @param {number} length
 * @param {number} index
 * @returns {Object}
 */
const makeProg = (length, index) => {
  // Осуществляем расчеты
  const diff = showRandomNumber(-Limit.LEFT, Limit.RIGHT);
  const startNumber = showRandomNumber(Limit.LEFT, Limit.RIGHT);
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
  const length = showRandomNumber(Limit.LEFT, Limit.RIGHT);
  const missingIndex = showRandomNumber(0, length - 1);

  // Получаем выражение и ответ
  const { expression, answer } = makeProg(length, missingIndex);

  return {
    rule,
    answer,
    expression,
  };
};

export default progGame;

/**
 * Модуль игры "Калькулятор"
 */
import { getRandomNum } from '../src/utils.js';
import startEngine from '../src/engine.js';

// Вспомогательные переменные
const rule = 'What is the result of the expression?';
const limit = {
  MIN: 5,
  MAX: 25,
};
const operator = {
  PLUS: '+',
  MINUS: '-',
  PROD: '*',
};

/**
 * Функция расчета выражения
 * @param {number} firstNum
 * @param {number} secondNum
 * @param {string} oper
 * @returns {number|NaN}
 */
const calculateExpr = (firstNum, secondNum, oper) => {
  // Выполняем вычисление в зависимости от оператора
  switch (oper) {
    case operator.PLUS:
      return firstNum + secondNum;
    case operator.MINUS:
      return firstNum - secondNum;
    case operator.PROD:
      return firstNum * secondNum;
    default:
      throw new Error(`Unknown operator: '${oper}'!`);
  }
};

/**
 * Основная функция
 * @returns {Object}
 */
const getCalcGameOptions = () => {
  // Получаем рандомные числа и оператор
  const randA = getRandomNum(limit.MIN, limit.MAX);
  const randB = getRandomNum(limit.MIN, limit.MAX);
  const randOper = Object.values(operator)[getRandomNum(0, Object.keys(operator).length - 1)];

  // Формируем выражение
  const expression = `${randA} ${randOper} ${randB}`;

  // Вычисляем выражение
  const value = calculateExpr(randA, randB, randOper);

  // Получаем правильный ответ на вопрос
  const answer = String(value);

  return {
    answer,
    expression,
  };
};

/**
 * Функция запуска игры
 * @returns {undefined}
 */
const startCalcGame = () => startEngine(rule, getCalcGameOptions);

export default startCalcGame;

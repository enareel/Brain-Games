/**
 * Модуль игры "Простое ли число?"
 */
import { showRandomNumber, getKeyByValue } from '../src/utils.js';

// Вспомогательные переменные
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const Limit = {
  LEFT: 5,
  RIGHT: 10,
};
const answerMap = {
  no: false,
  yes: true,
};

/**
 * Функция проверки числа на простоту
 * @param {number} num
 * @returns {boolean}
 */
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  // Осуществляем расчеты
  const limit = Math.floor(Math.sqrt(num));

  // Проверяем на простоту
  for (let i = 2; i <= limit; i += 1) {
    if (!(num % i)) {
      return false;
    }
  }
  return true;
};

/**
 * Основная функция
 * @returns {Object}
 */
const primeGame = () => {
  // Получаем рандомное число
  const randNum = showRandomNumber(-Limit.LEFT + 2, Limit.RIGHT);

  // Формируем выражение
  const expression = `${randNum}`;

  // Получаем правильный ответ на вопрос
  const answer = getKeyByValue(answerMap, isPrime(randNum));

  return {
    rule,
    answer,
    expression,
  };
};

export default primeGame;

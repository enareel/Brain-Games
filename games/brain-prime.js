/**
 * Модуль игры "Простое ли число?"
 */
import { getRandomNum } from '../src/utils.js';
import startEngine from '../src/engine.js';

// Вспомогательные переменные
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const limit = {
  MIN: -3,
  MAX: 25,
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
  const bound = Math.floor(Math.sqrt(num));

  // Проверяем на простоту
  for (let i = 2; i <= bound; i += 1) {
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
  const randNum = getRandomNum(limit.MIN, limit.MAX);

  // Формируем выражение
  const expression = `${randNum}`;

  // Получаем правильный ответ на вопрос
  const answer = isPrime(randNum) ? 'yes' : 'no';

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
const startPrimeGame = () => startEngine(primeGame);

export default startPrimeGame;

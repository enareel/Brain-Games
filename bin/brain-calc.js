#!/usr/bin/env node
/**
 * Программа (скрипт) проверки числа на четность
 */
import { showRandomNumber, getKeyByValue } from '../src/utils.js';
import engine from '../src/engine.js';

// Вспомогательные переменные
const ruleMsg = 'Answer "yes" if the number is even, otherwise answer "no".';
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
 * @param {Number} num
 * @returns {Boolean}
 */
const isEven = (num) => !(num % 2) && num > 0;

/**
 * Основная функция
 * @returns {Object}
 */
const evenGame = () => {
  // Получаем рандомное число
  const randomNumber = showRandomNumber(Limit.LEFT, Limit.RIGHT);

  // Получаем правильный ответ на вопрос
  const answer = getKeyByValue(answerMap, isEven(randomNumber));

  return {
    answer,
    value: randomNumber,
    expression: randomNumber,
  };
};

// Старт игры
engine(ruleMsg, evenGame);

#!/usr/bin/env node
/**
 * Программа (скрипт) проверки числа на четность
 */
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

// Вспомогательные переменные
const Message = {
  GREETINGS: 'Welcome to the Brain Games!',
  RULE: 'Answer "yes" if the number is even, otherwise answer "no".',
};
const MagicNumber = {
  TIMES: 3,
  LEFT: 1,
  RIGHT: 10,
};
const answerMap = {
  no: false,
  yes: true,
};

/**
 * Функция возврата ключа объекта по значению
 * @param {Object} obj
 * @param {*} value
 * @returns {String}
 */
const getKeyByValue = (obj, value) => Object.keys(obj).find((key) => obj[key] === value);

/**
 * Функция проверки числа на четность
 * @param {Number} num
 * @returns {Boolean}
 */
const isEven = (num) => !(num % 2) && num > 0;

/**
 * Функция вывода целого рандомного числа
 * в заданных границах
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const showRandomNumber = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

/**
 * Функция осуществления игры
 * @param {String} name
 * @returns {Number}
 */
const startGame = (name) => {
  let finalResult = `Congratulations, ${name}!`;
  for (let i = 0; i < MagicNumber.TIMES; i += 1) {
    const tmpValue = showRandomNumber(MagicNumber.LEFT, MagicNumber.RIGHT);
    console.log(`Question: ${tmpValue}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getKeyByValue(answerMap, isEven(tmpValue));
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      finalResult = `Let's try again, ${name}!`;
      break;
    }
  }
  console.log(finalResult);
  return finalResult;
};

// Приветствуем пользователя и описываем правила игры
console.log(`${Message.GREETINGS}`);
const userName = cli();
console.log(`${Message.RULE}`);

// Старт игры
startGame(userName);

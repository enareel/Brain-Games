/**
 * Модуль движка игры
 */
import readlineSync from 'readline-sync';
import cli from './cli.js';

// Вспомогательные переменные
const greetingsMsg = 'Welcome to the Brain Games!';
const times = 3;

/**
 * Функция осуществления игры
 * @param {String} ruleMsg
 * @param {Function} gameFunc
 * @returns {Number}
 */
const engine = (ruleMsg, gameFunc) => {
  // Приветствуем пользователя и описываем правила игры
  console.log(`${greetingsMsg}`);
  const userName = cli();
  console.log(`${ruleMsg}`);

  // Финальное сообщение
  let finalMsg = `Congratulations, ${userName}!`;

  // Цикл прохода игры
  for (let i = 0; i < times; i += 1) {
    // Получаем входные данные
    const { expression: questionExpression, answer: correctAnswer } = gameFunc();
    console.log(`Question: ${questionExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // Проверяем ответ на корректность
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      finalMsg = `Let's try again, ${userName}!`;
      break;
    }
  }

  // Выводим финальное сообщение
  console.log(finalMsg);
  return finalMsg;
};

export default engine;

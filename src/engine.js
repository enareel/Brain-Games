/**
 * Модуль движка игры
 */
import readlineSync from 'readline-sync';

// Вспомогательные переменные
const greetingsMsg = 'Welcome to the Brain Games!';
const timesCount = 3;

/**
 * Функция, которая спрашивает у пользователя имя
 * @returns {string}
 */
const getName = () => readlineSync.question('May I have your name? ');

/**
 * Функция-коллбэк игры
 * @callback gameCallback
 */

/**
 * Функция осуществления игры
 * @param {gameCallback} gameFunc
 * @returns {undefined}
 */
const startEngine = (gameFunc) => {
  // Приветствуем пользователя
  console.log(`${greetingsMsg}`);
  const userName = getName();
  console.log(`Hello, ${userName}!`);

  // Описываем правила игры
  const { rule: ruleMsg } = gameFunc();
  console.log(`${ruleMsg}`);

  // Цикл прохода игры
  for (let i = 0; i < timesCount; i += 1) {
    // Получаем входные данные
    const { expression: questionExpression, answer: correctAnswer } = gameFunc();
    console.log(`Question: ${questionExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // Проверяем ответ на корректность
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  // Выводим финальное сообщение
  console.log(`Congratulations, ${userName}!`);
};

export default startEngine;

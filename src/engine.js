/**
 * Модуль движка игры
 */
import readlineSync from 'readline-sync';

// Вспомогательные переменные
const greetingsMsg = 'Welcome to the Brain Games!';
const timesCount = 3;

/**
 * Функция-коллбэк получения опций игры
 * @callback gameCallback
 */

/**
 * Функция осуществления игры
 * @param {string} ruleMsg
 * @param {gameCallback} getGameOptions
 * @returns {undefined}
 */
const startEngine = (ruleMsg, getGameOptions) => {
  // Приветствуем пользователя
  console.log(`${greetingsMsg}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Описываем правила игры
  console.log(`${ruleMsg}`);

  // Цикл прохода игры
  for (let i = 0; i < timesCount; i += 1) {
    // Получаем входные данные
    const { expression: questionExpression, answer: correctAnswer } = getGameOptions();
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

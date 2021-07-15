/**
 * Модуль основной игры
 */
import readlineSync from 'readline-sync';

/**
 * Функция, которая спрашивает у пользователя имя
 * и приветствует его
 * @returns {undefined}
 */
const startMainGame = () => {
  // Приветствуем пользователя
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default startMainGame;

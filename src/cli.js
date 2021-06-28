/**
 * Модуль, который получает имя пользователя
 * и приветствует его
 */
import readlineSync from 'readline-sync';

/**
 * Функция, которая спрашивает у пользователя имя,
 * приветствует его и возвращает оное
 * @returns {string}
 */
const sayHello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default sayHello;

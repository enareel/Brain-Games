/**
 * Модуль, который получает имя пользователя
 */
import readlineSync from 'readline-sync';

/**
 * Функция, которая спрашивает у пользователя имя
 * @returns {string}
 */
const getName = () => readlineSync.question('May I have your name? ');

export default getName;

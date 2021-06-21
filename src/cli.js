/* Модуль, запрашивающий
имя пользователя и осуществляющий вывод оного */
import readlineSync from 'readline-sync';

export default () => readlineSync.question('May I have your name? ');

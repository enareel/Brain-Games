/**
 * Модуль вспомогательных компонентов
 */

/**
 * Функция вывода целого рандомного числа
 * в заданных границах
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const showRandomNumber = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

/**
 * Функция возврата ключа объекта по значению
 * @param {Object} obj
 * @param {*} value
 * @returns {string}
 */
const getKeyByValue = (obj, value) => Object.keys(obj).find((key) => obj[key] === value);

export { showRandomNumber, getKeyByValue };

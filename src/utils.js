/**
 * Модуль вспомогательных компонентов
 */

/**
 * Функция генерации целого рандомного числа
 * в заданных инт6ервалах
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Функция возврата ключа объекта по значению
 * @param {Object} obj
 * @param {*} value
 * @returns {string}
 */
const getKeyByValue = (obj, value) => Object.keys(obj).find((key) => obj[key] === value);

export { getRandomNum, getKeyByValue };

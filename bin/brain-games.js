#!/usr/bin/env node
/**
 * Программа (скрипт) основной игры
 */
import getName from '../src/cli.js';

// Приветствуем пользователя
console.log('Welcome to the Brain Games!');
const userName = getName();
console.log(`Hello, ${userName}!`);

#!/usr/bin/env node
/**
 * Программа (скрипт) игры "Простое ли число?"
 */
import primeGame from '../games/brain-prime-src.js';
import engine from '../src/engine.js';

// Старт игры
engine(primeGame);

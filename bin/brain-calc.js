#!/usr/bin/env node
/**
 * Программа (скрипт) игры "Калькулятор"
 */
import calcGame from '../games/brain-calc-src.js';
import engine from '../src/engine.js';

// Старт игры
engine(calcGame);

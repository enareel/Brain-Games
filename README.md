<p align="center">
  <span size="30px">🧠</span>
  <h1 style="border: none;">Игры разума</h1>
</p>

<p style="text-align: center;">A piece of centered text</p>
<p align="center">
  <a href="https://github.com/enareel/frontend-project-lvl1/actions/workflows/hexlet-check.yml"><img alt="Hexlet CI" src="https://img.shields.io/github/actions/workflow/status/enareel/frontend-project-lvl1/hexlet-check.yml?style=for-the-badge&logo=github&label=Hexlet%20CI" style="border-radius: 5px;"></a>
  <a href="https://github.com/enareel/frontend-project-lvl1/actions/workflows/project-check.yml"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/enareel/frontend-project-lvl1/hexlet-check.yml?style=for-the-badge&logo=github&label=CI" style="border-radius: 5px;"></a>
  <a href="https://codeclimate.com/github/enareel/frontend-project-lvl1/maintainability"><img alt="Code Climate maintainability" src="https://img.shields.io/codeclimate/maintainability/enareel/frontend-project-lvl1?style=for-the-badge&logo=codeclimate" style="border-radius: 5px;"></a>
  <a href="https://opensource.org/licenses/MIT"><img alt="GitHub license" src="https://img.shields.io/github/license/enareel/frontend-project-lvl1?style=for-the-badge&logo=" style="border-radius: 5px;"></a>
</p>

## Навигация

- [Навигация](#навигация)
- [Интро](#интро)
  - [Используемые технологии](#используемые-технологии)
- [Описание](#описание)
  - [Игры](#игры)
  - [Пример игры](#пример-игры)
- [Установка](#установка)
- [Превью](#превью)
  - [Brain Even (определение четного числа)](#brain-even-определение-четного-числа)
  - [Brain Calc (калькулятор)](#brain-calc-калькулятор)
  - [Brain GCD (определение наибольшего общего делителя)](#brain-gcd-определение-наибольшего-общего-делителя)
  - [Brain Progression (арифметическая прогрессия)](#brain-progression-арифметическая-прогрессия)
  - [Brain Prime (определение простого числа)](#brain-prime-определение-простого-числа)
- [Структура проекта](#структура-проекта)
- [Дополнительные команды](#дополнительные-команды)

## Интро

Проект **«Игры разума»** создан в рамках профессии **«Фронтенд-разработчик»** на платформе [Hexlet.io](https://ru.hexlet.io).

### Используемые технологии

Языки программирования, библиотеки, фреймворки и т.д., используемые в проекте.

<div style="display: flex; justify-content: start; column-gap: 10px;">
  <a href="https://github.com/enareel/frontend-project-lvl1/actions/workflows/hexlet-check.yml"><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" style="border-radius: 5px;"></a>
  <a href="https://github.com/enareel/frontend-project-lvl1/actions/workflows/hexlet-check.yml"><img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" style="border-radius: 5px;"></a>
  <a href="https://github.com/tj/commander.js"><img alt="Commander.js" src="https://img.shields.io/badge/Commander.js-181818?style=for-the-badge&logo=slashdot&logoColor=white" style="border-radius: 5px;"></a>
  <a href="https://docs.github.com/ru/actions"><img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" style="border-radius: 5px;"></a>
</div>

## Описание

**«Игры разума»** — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.

### Игры

- [Brain Even (определение четного числа)](#brain-even-определение-четного-числа)
- [Brain Calc (калькулятор)](#brain-calc-калькулятор)
- [Brain GCD (определение наибольшего общего делителя)](#brain-gcd-определение-наибольшего-общего-делителя)
- [Brain Progression (арифметическая прогрессия)](#brain-progression-арифметическая-прогрессия)
- [Brain Prime (определение простого числа)](#brain-prime-определение-простого-числа)

Команды, с помощью которых вызываются игры:

```bash
>> brain-even
>> braic-calc
>> brain-gcd
>> brain-progression
>> brain-prime
```

### Пример игры

```javascript
$ brain-progression
Welcome to the Brain Game!
What number is missing in this progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
>> Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
>> Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
>> Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Roman!
```

## Установка

```
⚠️ Перед установкой проекта проверьте наличие установленных Node.js, npm!
```

Для запуска имеющихся игр необходимо предварительно установить данный проект:

1. Склонируйте репозиторий, используя одну из следующих консольных команд:

```bash
# HTTPS
>> git clone https://github.com/enareel/frontend-project-lvl1.git
# SSH
>> git clone git@github.com:enareel/frontend-project-lvl1.git
```

2. Осуществите установку проекта:

```bash
>> make install
```

3. Осуществите симлинк проекта:

```bash
>> make link
```

4. Запустите любую из игр посредством комманд, указанные [ниже](#превью).

## Превью

### Brain Even (определение четного числа)

Команда для запуска: `brain-even`

[![asciicast](https://asciinema.org/a/o5j0wp7Tj1nrTP66UFFWXjhea.svg)](https://asciinema.org/a/o5j0wp7Tj1nrTP66UFFWXjhea)

### Brain Calc (калькулятор)

Команда для запуска: `brain-calc`

[![asciicast](https://asciinema.org/a/kwIcakbm7YakpMBz1xKVqkQhY.svg)](https://asciinema.org/a/kwIcakbm7YakpMBz1xKVqkQhY)

### Brain GCD (определение наибольшего общего делителя)

Команда для запуска: `brain-gcd`

[![asciicast](https://asciinema.org/a/IV8xAxXHVH6tgRqutYUqJOQKQ.svg)](https://asciinema.org/a/IV8xAxXHVH6tgRqutYUqJOQKQ)

### Brain Progression (арифметическая прогрессия)

Команда для запуска: `brain-progression`

[![asciicast](https://asciinema.org/a/Cr65rW6s2ihywAtZ8lJ7TutAm.svg)](https://asciinema.org/a/Cr65rW6s2ihywAtZ8lJ7TutAm)

### Brain Prime (определение простого числа)

Команда для запуска: `brain-prime`

[![asciicast](https://asciinema.org/a/OmqVh4M7TY34let7Oxacr5JaI.svg)](https://asciinema.org/a/OmqVh4M7TY34let7Oxacr5JaI)

## Структура проекта

```bash
.
├── bin
│   ├── brain-calc.js
│   ├── brain-even.js
│   ├── brain-games.js
│   ├── brain-gcd.js
│   ├── brain-prime.js
│   └── brain-progression.js
├── src
│   ├── brain-calc.js
│   ├── brain-even.js
│   ├── brain-games.js
│   ├── brain-gcd.js
│   ├── brain-progression.js
│   ├── brain-cli.js
│   ├── brain-engine.js
│   └── utils.js
├── .eslintrc.yml
├── .gitignore
├── Makefile
├── package-lock.json
├── package.json
└── README.md
```

## Дополнительные команды

Полезные команды, которые доступны для использования в проекте.

<dl>
    <dt><code>make publish</code></dt>
    <dd>Публикация проекта с флагом <code>--dry-run</code></dd>
    <dt><code>make lint</code></dt>
    <dd>Проверка кода проекта линтером ESLint.</dd>
</dl>

---

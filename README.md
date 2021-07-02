# Игры разума &middot; [![Actions Status](https://github.com/enareel/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/enareel/frontend-project-lvl1/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/66ce82e9ab7a4757d50c/maintainability)](https://codeclimate.com/github/enareel/frontend-project-lvl1/maintainability) ![Lint](https://github.com/enareel/frontend-project-lvl1/actions/workflows/project-lint.yml/badge.svg)

[Описание](#описание) | [Установка](#установка) | [Превью](#превью)

## Описание

**«Игры разума»** — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:

- [Калькулятор](#калькулятор). Арифметические выражения, которые необходимо вычислить.
- [Прогрессия](#прогрессия). Поиск пропущенных чисел в последовательности чисел.
- [Определение четного числа](#определение-четного-числа).
- [Определение наибольшего общего делителя](#определение-наибольшего-общего-делителя).
- [Определение простого числа](#определение-простого-числа).

Пример игры:

```$ brain-progression
Welcome to the Brain Game!
What number is missing in this progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Roman!
```

## Установка

Для запуска имеющихся игр необходимо предварительно установить данный проект:

1. Склонируйте репозиторий, например, посредством следующей консольной команды:

```
git clone https://github.com/enareel/frontend-project-lvl1.git
```

2. Осуществите установку проекта:

```
make install
```

3. Осуществите симлинк проекта:

```
make link
```

4. Запустите любую из игр посредством комманд, указанные [ниже](#превью).

## Превью

### Калькулятор

Команда для запуска: `brain-calc`

[![asciicast](https://asciinema.org/a/kwIcakbm7YakpMBz1xKVqkQhY.svg)](https://asciinema.org/a/kwIcakbm7YakpMBz1xKVqkQhY)

### Прогрессия

Команда для запуска: `brain-progression`

[![asciicast](https://asciinema.org/a/Cr65rW6s2ihywAtZ8lJ7TutAm.svg)](https://asciinema.org/a/Cr65rW6s2ihywAtZ8lJ7TutAm)

### Определение четного числа

Команда для запуска: `brain-even`

[![asciicast](https://asciinema.org/a/o5j0wp7Tj1nrTP66UFFWXjhea.svg)](https://asciinema.org/a/o5j0wp7Tj1nrTP66UFFWXjhea)

### Определение наибольшего общего делителя

Команда для запуска: `brain-gcd`

[![asciicast](https://asciinema.org/a/IV8xAxXHVH6tgRqutYUqJOQKQ.svg)](https://asciinema.org/a/IV8xAxXHVH6tgRqutYUqJOQKQ)

### Определение наибольшего общего делителя

Команда для запуска: `brain-prime`

[![asciicast](https://asciinema.org/a/OmqVh4M7TY34let7Oxacr5JaI.svg)](https://asciinema.org/a/OmqVh4M7TY34let7Oxacr5JaI)

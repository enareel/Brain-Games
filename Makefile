# Makefile
install: # установка зависимостей
	npm ci
publish: # публикация пакета
	npm publish --dry-run
brain-games: # запуск файла игры
	node bin/brain-games.js

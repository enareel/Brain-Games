# Makefile
install: # установка зависимостей
	npm ci
link: # линк
	sudo npm link
publish: # публикация пакета
	npm publish --dry-run
lint: # линтинг
	npx eslint .
brain-games: # запуск файла игры
	node bin/brain-games.js

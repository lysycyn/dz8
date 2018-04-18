# shri-architecture
Задание по архитектуре для ШРИ-2018

## Постановка задачи
Вам предлагается реализовать один из наиболее популярных в мире фронтенда архитектурных подходов - Flux - в формате простого фреймворка. Ваш фреймворк должен уметь обрабатывать действия пользователя и предоставлять API для связи с бэкэндом

## Требуемая реализация
Вам предлагается 2 файла - `index.html` и `sendToServer.js`.
В `index.html` вы найдете простую форму: инпут для ввода текста, кнопку "отправить на сервер" и лейбл.
В `sendToServer.js` находится фейковый метод отправки данных на сервер. После "успешной отправки" метод вызывает событие `dataIsSent`.

Вам предлагается написать Flux реализацию фреймворка, который бы осуществлял отправку данных на сервер по нажатию на кнопку, а после успешной отправки писал в лейбле "Сервер принял данные <текст из инпута>".
Каждый этап (передача данных и/или управления между элементами архитектуры) должен логироваться в консоль и на экран.

**Использование фреймворков и библиотек, в том числе jQuery, запрещено.**
Реализовывать виртуальный DOM для Flux-архитектуры не нужно. Изменять API `sendToServer` - можно и даже рекомендуется (при сохранении "функциональности"). Изменять верстку index.html - можно, но необязательно.

Обратите внимание, что в стандарте es5 еще нет классов и разделения кода на модули. Если вы используете es5 - прочитайте, как реализовать модули и классы, например, в книге Стояна Стефанова "Javscript. Шаблоны".


## Минимальное решение
- Реализация фреймворка Flux с логированием в консоль
- Сделать логирование событий на экран

## Оптимальное решение
- Реализация MVP-фреймворка с той же функциональностью

## Дополнительное задание
- Реализовать другие архитектурные подходы (MVC, MVP)
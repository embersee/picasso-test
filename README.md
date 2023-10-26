# Picasso test
### Инстирукция
Используя React, RTK Query, React Router DOM 6, JSON Placeholder и FSD-архитектуру сделайте простое приложение: 
1. главная страница - список постов (бесконечный скролл + виртуализация)
2. каждый пост в списке - это строка: номер + заголовок + описание обрезанное "..." если не влезает + кнопка "просмотр"
3. кнопка "просмотр" ведет на отдельный роут, где отображается полная информация о посте в произвольной форме + кнопка "назад"

### Instructions
Using React, RTK Query, React Router DOM 6, JSON Placeholder and FSD architecture, make a simple application: 
1. home page - list of posts (infinite scroll + virtualization)
2. each post in the list is a line: number + title + truncated description "..." if it doesn't fit + add "view" button
3. the "view" button leads to a separate route, where complete information about the post is displayed in free form + the "back" button

## Installation
Firstly git clone then cd into project, then:
```
npm install
```
Following by:
```
npm run dev
```
Open Dev tools to inspect list virtualization & infinite query.

# spa-countries-project - небольшой сервис со списком стран из api c поиском и фильтрацией ним. Также есть возможность выбора темы (светлой или темной)

# ТЗ https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca

Помимо React и react-router-dom используется библиотека styled-components.
# Установка и очистка react.
npx create-react-app . (установит в текущую папку)

# Установка react-router-dom, styled-components и axios
Axios – это библиотека с открытым исходным кодом, позволяющая делать HTTP-запросы
1. npm i styled-components
2. npm i react-router-dom
3. npm i axios
# Скопировал внешний вил приложения (папка design)

# Создал файл руководство по стилям (style-guide.md)
https://www.frontendmentor.io/

# Задали стили согласно style-guide.md

# Контейнер, Хедер и установка реакт-айконс
npm i react-icons
1. по заданию нужно использовать иконки Ionicons 5. сайт с иконками:
https://react-icons.github.io/react-icons/icons?name=io5

# Шапка

# Смена темы

# Создание формы
1. форма состоит из двух елементов поиска и селекта
2. установим реакт селект
3. для формы создадим три компонента (controls для контроля, search для поиска, customSelect)

# Установка реакт селект https://react-select.com/home
npm i --save react-select

# Реализация селект и поиск в мейне

# API https://restcountries.com/

# создаем config.js для ссылки API

# для реализации списка стран создадим два компонента со списком и карточкой

# реализация роутинга
1. чтобы работал роутинг нужно все приложение обернуть в BrowserRouter
после чего в самом App может задавать роуты
2. Создаем три страницы

# фильтрация
1. для главной страници заведем стейт с фильтрованными странами

# страница с деталями
1. инфо будем получать по новой ссылке из конйига, поэтому нужен аксиос.
2. для стейта карточки детали импортируем юзстейт и юзэффект
3. импортируем функцию получения дет. инфо из конфиг
4. для иконки (стрелка назад) мипортируем реакт айконс, также импортируем useNavigate

# публикация проекта
1. добавлеем поле в корневой объект файла package.json "homepage": "https://maximmorenko.github.io/spa-countries-project";
2. добавлеем в поле 'script' корневого объекта в файле package.json "predeploy": "npm run build", "deploy": "gh-pages -d build"
3. Для того чтобы роутинг работал мы должны у компонента BrowserRouter добавить атрибут baseName='' и указать ему значение (путь нашей главной страницы) /spa-countries-project
4. если есть ключи то переносим их с енв локал на гитхаб в секреты (настройки проекта => новый секрет)
5. устанавливаем npm install gh-pages -D (-D это то же самое что и --save-dev)
6. сохраняем изменения git add -A
7. запускаем диплой npm run deploy
8. ссылка на проект https://maximmorenko.github.io/spa-countries-project


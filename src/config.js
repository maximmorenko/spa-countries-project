const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';
// перенастроим ссылку all на ссылку с конкретными полями, перечислим через запятую
// ?fields=name,capital,flags,population,region

// из -за того что в одном объекте страны очень много полей воспользуемся ссылкой для конкретных полей
// https://restcountries.com/v2/all?fields=name,capital,flags,population,

// функция поиска стран
export const searchByCountry = (name) => BASE_URL + 'name/' + name;

// Для страницы с детальной информацией создадим функцию фильтрации стран по коду
export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');
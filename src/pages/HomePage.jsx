import React from 'react';
// импортируем axios 
// Axios – это библиотека с открытым исходным кодом, позволяющая делать HTTP-запросы
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../config';

export const HomePage = ({countries, setCountries}) => {

    // создадим стейт фильтрованного списка стран по умолчанию бедет полный массив countries
    const [filteredCountries, setFilteredCountries] = useState(countries);
    // console.log(countries);

    // создадим функцию поиска
    const handleSearch = (search, region) => {
        // на входе ожидаем два параметра по поиску. название страниы в поисковой страке и регион в селекте
        // создадим переменную с данными (спредом развернем в нее все страны)
        let data = [...countries];
        // дальше последовательно проверяем
        if (region) {
            // если есть регион, то делаем фильтрацию по региону, проверяем по всем странам их регионы, совпадают ли они с текущим (выбраным)
            data = data.filter((c) => c.region.includes(region));
        }

        if (search) {
            // если есть поисковое слово, то делаем фильтрацию по слову, 
            // проверяем по всем странам их название, совпадают ли они с текущим (выбраным)
            // также название страны в массиве и введенное слово в поиске приводим к нижнему регистру
            data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
        }
        // записываем усеченный массив стран в стейт
        setFilteredCountries(data);
    };  
    

//   useEffect(() => {
//     // делаем запрос через аксиос мотодом гет на конкретную ссылку (ссылку импортируем из конфиг)
//     // также сделаем проверку на случай пустого массива кантрис, для того чтобы юзэффект заново не загружал массив если он уже есть
//     if (!countries.length) // если длины нет то делаем запрос
//         axios.get(ALL_COUNTRIES)
//         .then(
//         // на входи получаем дата. сразу деструктурируем их и передаем в setCountries на выходе
//         ({data}) => setCountries(data)
//         )
  
//     }, [countries.length, setCountries])
//     // полученые страны передаим в список
useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);


    return (
        <>
        {/* в контролях при поиске вызвваем функцию фильтрации handleSearch
        и передаем ее в компонент контроли*/}
        <Controls onSearch={handleSearch}/>
        <List>
        {/* пробежимся п массиву countries и отрисуем для каждой страны карточку */}
        {/* подготовим объект с инфо о стране с нужными пропами */}
        {filteredCountries.map((c) => {
          const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                },
                {
                    title: 'Region',
                    description: c.region,
                },
                {
                    title: 'Capital',
                    description: c.capital,
                },
                ],
            };

            return (
                <Link key={c.name} to={`/country/${c.name}`}>
                    <Card key={c.name} {...countryInfo}/>
                </Link>
            );
        })}
        </List>
        </>
    );
};


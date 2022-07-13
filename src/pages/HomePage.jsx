import React from 'react';
// импортируем axios 
// Axios – это библиотека с открытым исходным кодом, позволяющая делать HTTP-запросы
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../config';

export const HomePage = ({countries, setCountries}) => {

   // создадим стейт списка стран по умолчанию пустой массив
  // const [countries, setCountries] = useState([]);
  // console.log(countries);

  // Достаем из юз хистори метод пуш, он позволит нам переходить на разные страницы
  // const {name} = useParams;


  useEffect(() => {
    // делаем запрос через аксиос мотодом гет на конкретную ссылку (ссылку импортируем из конфиг)
    // также сделаем проверку на случай пустого массива кантрис, для того чтобы юзэффект заново не загружал массив если он уже есть
    if (!countries.length) // если длины нет то делаем запрос
        axios.get(ALL_COUNTRIES)
        .then(
        // на входи получаем дата. сразу деструктурируем их и передаем в setCountries на выходе
        ({data}) => setCountries(data)
        )
  
    }, [countries.length, setCountries])
    // полученые страны передаим в список

    return (
        <>
        <Controls/>
        <List>
        {/* пробежимся п массиву countries и отрисуем для каждой страны карточку */}
        {/* подготовим объект с инфо о стране с нужными пропами */}
        {countries.map((c) => {
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


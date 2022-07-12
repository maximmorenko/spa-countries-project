// импортируем axios 
// Axios – это библиотека с открытым исходным кодом, позволяющая делать HTTP-запросы
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Controls } from './components/Controls';
import { Header } from './components/Header';
import List from './components/List';
import Card from './components/Card'
import { Main } from './components/Main';
import { ALL_CONTRIES } from './config'


function App() {

  // создадим стейт списка стран по умолчанию пустой массив
  const [countries, setCountries] = useState([]);

  // console.log(countries);

  useEffect(() => {
    // делаем запрос через аксиос мотодом гет на конкретную ссылку (ссылку импортируем из конфиг)
    axios.get(ALL_CONTRIES)
    .then(
      // на входи получаем дата. сразу деструктурируем их и передаем в setCountries на выходе
      ({data}) => setCountries(data)
    )
  
  }, [countries])
  // полученые страны передаим в список

  return (
    <>
    <Header />
    <Main>
      {/* импорт чилдренов добавляется автоматически */}
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
            <Card
              key={c.name}
              // onClick={() => push(`/country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </Main>
      
    </>
  );
}

export default App;

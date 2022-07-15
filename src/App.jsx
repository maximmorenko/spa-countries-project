// импортируем axios 
// Axios – это библиотека с открытым исходным кодом, позволяющая делать HTTP-запросы
// import axios from 'axios';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {

  // чтобы при переходе на детали и обратно не загружались заново все стнаны перенесем сюда стейт со странами и передадим его ниже
  const [countries, setCountries] = useState([]);

  return (
    <>
    <Header />
    <Main>
      {/* импорт чилдренов добавляется автоматически */}
      <Routes>
        {/* у роута два атрибута путь и компонент страница с разметкой*/}
        <Route path='/' element={
          <HomePage countries={countries} setCountries={setCountries}/>
        }/>
        <Route path='/country/:name' element={<Details/>}/>
        <Route  path='*' element={<NotFound/>}/>
      </Routes>
    </Main>
    </>
  );
}

export default App;

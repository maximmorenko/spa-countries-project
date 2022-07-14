import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const options = [
  // каждая опция будет иметь велью и лейбл (согласно документации)
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = ({ onSearch }) => {
  // создадим стейт для поиска
  const [search, setSearch] = useState('');
  // создадим стейт для смены регеона
  const [region, setRegion] = useState('');

  useEffect(() => {
    // подготовим данные для регина (так как в исходном жейсоне есть lable и value бедем использовать value если оно есть, если нет то
    // передаем пустую строку)
    const regionValue = region?.value || '';
    // вызываем полученую функцию передаем внее полученую строку если есть и регион
    onSearch(search, regionValue);

    // зависимостью будут строка поиска и регион
    // eslint-disable-next-line
  }, [search, region]);

  return (
    <Wrapper>
        {/* компонент Search ожидаем пропсы search и setSearch, передаем их ему*/}
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
      // передаем пропсы
        options={options}
        placeholder="Filter by Region"
        // возможность отменить чтото по крестику
        isClearable
        // отменяем возможность поиска
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};
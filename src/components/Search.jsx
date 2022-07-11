// импортируем стили
import styled from 'styled-components';
// импортируем иконку с лупой
import { IoSearch } from 'react-icons/io5';
import React from 'react';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%; // для маленьких экранов ширина 100% для больших 280px
  margin-bottom: 1rem;
  @media (min-width: 767px) {
    // для десктопа убираем маржин и делаем ширину 280px
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  // attrs - атрибуты
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

export const Search = ({ search, setSearch }) => {
    // на входе ждем строку поиска и функцию ее обновления, сразу делаем деструктуризацию пропсов { search, setSearch }

    //  функцией обновления 
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <InputContainer>
        <IoSearch />
        {/* на инпут вешаем ончейндж со значением search и функцией обновления  */}
        <Input onChange={handleChange} value={search}/>
            
        </InputContainer>
    );
};


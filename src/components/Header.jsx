import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import {IoMoon, IoMoonOutline} from 'react-icons/io5'

// у хедера будет несколько частей. 
// поэтому лечше создавать отдельную папку для хедера и его частей (компонентов)
// но в данном приложении напишем его части внутри хедера

const HeaderEl = styled.header`
box-shadow: var(--shadow);
background-color: var(--colors-ui-base);
`;

// врапер будет отвечать за правильное положение всего что внутри
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
     align-items: center;
     padding: 2rem 0;
`;

// тайтл - ссылка, ведет на главную
const Title = styled.a.attrs({
    // задаем атрибут
    href: '/',
    })`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
    `;

// переключатель
const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    // font-weight: var(--fw-bold);
    text-transform: capitalize;
`;

function Header(props) {

// создадим состояние темы
const [theme, setTheme] = useState('light');

// создадим обработчик, метод функцию меняющюю темы
const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
// проверяем если тема светлая то надо установить темную, если темная то установить светлую
// вешаем обработчик на свитчер
    
useEffect(() => {
    // создаем дата атрибут у боди с именем 'data-theme' и значением theme
    document.body.setAttribute('data-theme', theme)
    // каждый раз когда бедем менять эту тему будет меняться набор переменных
}, [theme])

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                        <IoMoonOutline size="14px" />
                        ) : (
                        <IoMoon size="14px" />
                        )}{' '}
                        <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
}

export {Header};
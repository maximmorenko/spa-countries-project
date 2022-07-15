import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {filterByCode} from '../config'
import { Link } from 'react-router-dom';

// обертка
const Wrapper = styled.section`
    margin-top: 3rem; //отступ от кнопки
    width: 100%;
    display: grid; // испольжуем сетку (для разных устройств разные значения)
    grid-template-columns: 100%; // на маленьких экранах
    gap: 2rem; // расстояние между елементами

    //для екранов от 767px
    @media (min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    //для екранов от 1024px
    @media (min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

// картинка
const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain; // обрезать не будем
`;

// заголоовок
const InfoTitle = styled.h1`
margin: 0;
  font-weight: var(--fw-normal);
`;

//================================================
// списки
const ListGroup = styled.div`
    display: flex;
    flex-direction: column; //для маленьких устройств

    gap: 2rem; // не зависимо от роу или колум, между ел. 2рема 

    @media (min-width: 1024px) {
        flex-direction: row; //для больших устройств
        gap: 4rem;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;
    & > b {
        font-weight: var(--fw-bold);
    }
`;
//================================================
// группа с граничущими странами
const Meta = styled.div`
    margin-top: 3rem; // отодвинемся от списков на 3 рема
    display: flex;
    gap: 1.5rem;
    flex-direction: column; //для маленьких устройств
    align-items: flex-start;
    & > b {
    font-weight: var(--fw-bold);
    }

    @media (min-width: 767px) {
        flex-direction: row; //для больших устройств
        align-items: center;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap; // чтобы могли перенаситься
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
`;
//================================================


export const Info = (props) => {
// деструктурируем пропсы
const {
    name,
    nativeName, // оригинальное имя используемое в самой стране
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
} = props;

const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c) => c.name)));
  }, [borders]);

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name}/>
            <div>
                <InfoTitle>{name}</InfoTitle>
            </div>
            {/* дальше идут два списка */}
            <ListGroup>
                <List>
                    <ListItem>
                        <b>Native Name:</b> {nativeName}
                    </ListItem>
                    <ListItem>
                        <b>Population</b> {population}
                     </ListItem>
                    <ListItem>
                        <b>Region:</b> {region}
                    </ListItem>
                    <ListItem>
                        <b>Sub Region:</b> {subregion}
                    </ListItem>
                    <ListItem>
                        <b>Capital:</b> {capital}
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <b>Top Level Domain</b>{' '}
                        {topLevelDomain.map((d) => (
                            // на входе домен (d)
                        <span key={d}>{d}</span>
                        ))}
                    </ListItem>
                    <ListItem>
                        <b>Currency</b>{' '}
                        {currencies.map((c) => (
                            <span key={c.code}>{c.name} </span>
                        ))}
                    </ListItem>
                    <ListItem>
                        <b>Top Level Domain</b>{' '}
                        {languages.map((l) => (
                            <span key={l.name}>{l.name}</span>
                        ))}
                    </ListItem>
                </List>
            </ListGroup>
            <Meta>
                {/* так как некоторые страны могут не иметь границы, сделаем проверку
                если нет граниици то пишем (There is no border countries), если есть то отрисовывеме список стран имеющих границу */}
                <b>Border Countries</b>
                {!borders.length ? (
                    <span>There is no border countries</span>
                ) : (
                    <TagGroup>
                        {neighbors.map((b) => (
                            <Link className='link' key={b} to={`/country/${b}`}>
                                <Tag key={b}>{b}</Tag>
                            </Link>
                        ))}
                    </TagGroup>
                )}           
            </Meta>
        </Wrapper>
    );
}


import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// для стейта карточки детали импортируем юзстейт и юзэффект
// импортируем функцию получения дет. инфо из конфиг
import { searchByCountry } from '../config';
// для иконки (стрелка назад) мипортируем реакт айконс
import {IoArrowBack} from 'react-icons/io5'
import { Button } from '../components/Button';
import { Info } from '../components/Info';



function Details() {
    const { name } = useParams();    // достанем имя из юзпарамс
    // создадим стейт карточки, по умолчанию пустой
    const [country, setCountry] = useState(null);
    
    //console.log(country);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
      }, [name]);
    

    // у функции навигейт два параметра перевый это куда а второй опции первоготпараметра
    const navigate = useNavigate();
    // создадим функцию назад, и результатом ее будет вызов функции навигейт с параметром пути
    // в параметры можно добавить путь конкретный (./) тогда она будет работать как линк,
    // а можно исполььзовать цифрф (-1 означает вернуться на одну страницу назад), (1 означает перейти на следующую страницу)
    const goBack = () => navigate(-1)

    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack /> Back
            </Button>
            {country && <Info {...country} />}
        </div>
    );
}

export {Details};
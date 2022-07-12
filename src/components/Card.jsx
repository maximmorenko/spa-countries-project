// для разделения стилей моб и десктоп создадим врапер, для которого импортируем стайлед 
import styled from "styled-components";
import React from 'react';


const Wrapper = styled.article`
border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  //   чтобы картинки обрезались
  overflow: hidden;
`;

// в карточке будет картинка
const CardImage = styled.img`
display: block;
width: 100%;
height: 150px;
object-fit: cover;
object-position: center;
box-shadow: var(--shadow);
`;

// также будет тело карты
const CardBody = styled.div`
padding: 1rem 1.5rem 2rem;
`;

// в теле бедет название
const CardTitle = styled.h3`
margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

// также в теле будет список остальных данных
const CardList = styled.ul`
list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

// в списке данных бедет елемент
const CardListItem = styled.li`
font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & > b {
    font-weight: var(--fw-bold);
  }
`;

function Card(props) {
    // на входе ждем картинку, название, инфо и функция клика
    // для удобства сделаем деструктуризацию
    // по умолчанию массив с инфо сделаем пустой
    const {img, name, info = [], onClick} = props;

    return (
        // на врапер вешаем полученый онклик
        <Wrapper onClick={onClick}>
            <CardImage src={img} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {/* кард лист будет получать массив инфо, пробежим по массиву мапом и для каждого елемента отрисуем CardListItem*/}
                    {info.map(el => (
                        <CardListItem key={el.title}>
                            {/* тег b - жирный шрифт */}
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
            
        </Wrapper>
    );
}

export default Card;


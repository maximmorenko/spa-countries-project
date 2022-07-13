// для разделения стилей моб и десктоп создадим врапер, для которого импортируем стайлед 
import styled from "styled-components";
import React from 'react';

const Wrapper = styled.section`
width: 100%;
padding: 2rem 0;

// на мобилах строим в колону, повторение 1 раз по одной фракции
display: grid;
grid-template-columns: repeat(1, 1fr);
gap: 2rem;

// на планшетах шириной от 767 строим в две колонки, повторение 2 раза по одной фракции
@media (min-width: 767px) {
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  padding: 2.5rem 0;
}

// на десктоп шириной от 1024 строим в 4 колонки, повторение 4 раза по одной фракции
@media (min-width: 1024px) {
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
}
`;

function List({children}) {
  // на входе ждем массив со странами countries
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export {List};
import styled from 'styled-components';

import Select from 'react-select';

// в работе со стайлед компонентс мы можем не только работать с штмл елементами, но и с уже создаными компонентмим,
// вместо точки после styled в скобках указываем нужный компоент
// добавляем ему атрибуты через аттрс

export const CustomSelect = styled(Select).attrs({
  styles: {
    // значения атрибутов контрол и опшнс будут гибкими
    control: (provided) => ({
        // control - то место куда мы кликаем чтобы чтото выбирать
        // на входе получеем провайдед стил, которые предоставляет библиотека
        // разворачиваем их (спредим) и добавляем новые
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided, state) => ({
        // на входе опции получают тот же провайдед стаил, которые предоставляет библиотека,
        // (разворачиваем их (спредим) и добавляем новые)
        // а также получает состояние, выбрана опция или нет
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
        //   меняем бекграунд если выбрана опция
      backgroundColor: state.isSelected
        ? 'var(--colors-bg)'
        : 'var(--colors-ui-base)',
    }),
  },
})`
  // зададим фиксированную ширину
  width: 200px;
  // указываем радиус рамки записаный в переменную
  border-radius: var(--radii);
  // явно указываем наш шрифт
  font-family: var(--family);
  border: none;

  // финт ушами
  // когда мы пишем стили у компонентов мы можем исполььзовать не только адаптив но и символ & (амперсандр) как в препроцессоре sass
  // указываем для дочерних елементов тень
  & > * {
    box-shadow: var(--shadow);
  }
  // вложеному инпуту дабавим падинг слева
  & input {
    padding-left: 0.25rem;
  }
  // указываем цвет текста для всех вложеных елементов
  & * {
    color: var(--colors-text) !important;
  }
  // указываем задний фон  вложенному диву у которого есть айди
  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;


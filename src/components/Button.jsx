import styled from 'styled-components';

export const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);

  border: none;
  display: flex;
  align-items: center; // по вертикали относительно друг друга
  gap: 0.75rem; // для новых браузеров (растояние между)

  color: var(--color-text);
  cursor: pointer;
`;
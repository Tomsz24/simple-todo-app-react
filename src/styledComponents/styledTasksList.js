import styled, { css } from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: 100%;
  padding: 15px;
  justify-content: space-between;
  border-bottom: 2px solid #ddd;

  ${({ hide }) => hide && css`
    display: none;
  `}
`;

export const Content = styled.p`
  flex-grow: 1;
  padding: 0 10px;
  line-height: 30px;
`;

export const TaskDoneBtn = styled.button`
  border: none;
  background-color: green;
  color: #fff;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const RemoveTaskBtn = styled.button`
  border: none;
  background-color: red;
  color: #fff;
  width: 30px;
  height: 30px;
  margin-right: 0px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Ul = styled.ul`
  padding-top: 15px;
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
import styled from 'styled-components';

export const Subtitle = styled.h2`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto auto;
  padding: 0 0 15px;
  border-bottom: 2px solid #ddd;


  @media (max-width: 767px) {
    grid-template-columns: unset;
    grid-template-rows: auto auto auto;
    justify-content: center;
    padding-bottom: 15px;
  }
`;

export const Button = styled.button`
  border: none;
  color: teal;
  background-color: transparent;
  cursor: pointer;
  margin: 5px;
  transition: .3s;

  &:hover {
    transform: scale(1.1);
    color: hsl(180, 100%, 35%);
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;

    &:hover {
      transform: scale(1);
    }
  }

  @media (max-width: 767px) {
    margin: 10px;
  }
`;



// .--color {
//   color: #ccc;
// }


// .disabled {
//   color: #ccc;
// }
// .disabled:hover {
//   transform: scale(1);
//   color: #ccc;
//   cursor: not-allowed;
// }
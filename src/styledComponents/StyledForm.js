import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  background-color: #fff;
  padding: 25px 15px;
  justify-content: space-between;
  border-bottom: 10px solid #ddd;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  font-size: 20px;
  height: 45px;
  line-height: 35px;
  flex-grow: 1;
  margin-right: 25px;
  padding-left: 15px;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const Button = styled.button`
  width: 20vw;
  border: none;
  background-color: teal;
  color: #fff;
  font-size: 20px;
  height: 45px;
  cursor: pointer;
  transition: .3s;

    &:hover {
    transform: scale(1.12);
}

@media (max-width: 767px) {
    width: 100%;
    margin-top: 5px;
  }
`;
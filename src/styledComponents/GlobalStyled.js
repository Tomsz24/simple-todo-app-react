import { createGlobalStyle } from 'styled-components';


export const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root {
  margin: 25px;
}
body {
  font-family: 'Montserrat', sans-serif; 
    background-color: #ddd;
    margin: 0 auto;
    min-height: 100vh;
  
}
.title {
  padding: 20px 0;
}
`;


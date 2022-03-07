import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  textColor: '#000'
};

export const darkTheme = {
  body: '#363537',
  textColor: '#fff',
  text: "#FAFAFA",
};

export const GlobalStyles = createGlobalStyle`
    body { 
        background-color: ${(props) => props.theme.body}
    }
`;

import React, { useState } from 'react';
import './App.css';
import Continents from './components/Continents';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Continents themeToggler={themeToggler} theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Continents from './components/Continents';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CountryDetailPage from './components/CountryDetail.page';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <>
    <Router>

      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Continents  themeToggler={themeToggler} theme={theme}  />}/>
            
          <Route path='/countries/:countryId' element={ <CountryDetailPage /> } />
            
        </Routes>
      </ThemeProvider>
    </Router>
    </>
  );
}

export default App;

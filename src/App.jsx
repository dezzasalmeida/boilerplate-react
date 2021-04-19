import React from 'react';
import Main from './components/Main';
import Heading from './components/Heading';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <Heading />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;

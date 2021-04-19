import React from 'react';
import Main from './components/Main';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;

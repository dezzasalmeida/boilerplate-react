import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';
import theme from 'styles/theme';

const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];

export default decorators;

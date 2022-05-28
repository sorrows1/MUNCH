import { createTheme } from '@mui/material';

const primaryLight = '#fdf2e9';
const primaryMain = '#e67e22';
const primaryDark = '#cf711f';
const primaryText = '#333';
const secondaryText = '#fff';
const secondaryMain = '#1c78d3';

const theme = createTheme({
  typography: {
    fontFamily: `"Rubik", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    primary: {
      light: `${primaryLight}`,
      main: `${primaryMain}`,
      dark: `${primaryDark}`,
      white: `#fff`
    },
    secondary: {
      main: `${secondaryMain}`,
    },
    text: {
      primary: `${primaryText}`,
      secondary: `${secondaryText}`
    }
  },
});

export default theme;

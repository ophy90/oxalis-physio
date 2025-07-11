import { createTheme } from '@mui/material/styles';
import DahliaBold from '../assets/fonts/Dahlia-bold.woff2';

const primary = {
  main: '#fff',
  light: '#e9dce3',
  dark: '#914e72'
};

const rawtheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#000',
      secondary: '#555',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    muicssbaseline: {
      styleoverrides: `
        @font-face {
          font-family: 'dahlia';
          font-style: bold;
          font-display: swap;
          font-weight: 400;
          src: local('Dahlia'), local('Dahlia-bold'), url(${DahliaBold}) format('woff2');
          unicoderange: u+0000-00ff, u+0131, u+0152-0153, u+02bb-02bc, u+02c6, u+02da, u+02dc, u+2000-206f, u+2074, u+20ac, u+2122, u+2191, u+2193, u+2212, u+2215, u+feff;
        }
      `,
    },
  },
});

const fontHometitle = {
  ...rawtheme,
  fontsize: '120px',
  padding: '25px',
  textalign: 'center',
  [rawtheme.breakpoints.down("lg")]: {
    fontsize: "80px",
    padding: '40px',
  },
  [rawtheme.breakpoints.down("md")]: {
    fontsize: "40px",
    padding: '60px',
  }
};

const oxalisTheme = {
  typography: {
    h1: {
      ...fontHometitle
    }
  }
}

export default oxalisTheme;

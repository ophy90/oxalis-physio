import { createTheme } from '@mui/material/styles';
import DahliaBold from '../assets/fonts/Dahlia-bold.woff2';


const primary = {
  light: '#fff',
  main: '#e9dce3',
  dark: '#914e72'
};

const oxalisTheme = createTheme({
 ...primary,
  palette: {
    text: {
      primary: primary,
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
  }
});

oxalisTheme.typography.h1 = {
    fontFamily: 'Dahlia-bold',
    fontSize: '120px',
    padding: '25px',
    color: oxalisTheme.palette.text.primary.light,
    textAlign: 'center',
    [oxalisTheme.breakpoints.down("lg")]: {
        fontSize: "80px",
        padding: '40px',
    },
    [oxalisTheme.breakpoints.down("md")]: {
        fontSize: "40px",
        padding: '60px',
    }
};


export default oxalisTheme;

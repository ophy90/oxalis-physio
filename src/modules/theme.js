import { createTheme } from '@mui/material/styles';
import DahliaBold from '../assets/fonts/Dahlia-bold.woff2';
import DahliaMediumCondensed from '../assets/fonts/Dahlia-MediumCondensed.woff2';
import ApercuLight from '../assets/fonts/apercu-light.woff2';


const primary = {
  light: '#fff',
  main: '#e9dce3',
  dark: '#914e72'
};

const oxalisTheme = createTheme({
 ...primary,
  palette: {
    text: {
        primary: primary
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
          font-family: 'dahlia-bold';
          font-style: normal;
          font-weight: normal;
          src: url(${DahliaBold}) format('woff2');
          unicoderange: u+0000-00ff, u+0131, u+0152-0153, u+02bb-02bc, u+02c6, u+02da, u+02dc, u+2000-206f, u+2074, u+20ac, u+2122, u+2191, u+2193, u+2212, u+2215, u+feff;
        }
        @font-face {
          font-family: 'dahlia-medium';
          font-style: medium;
          font-weight: 400;
          src: url(${DahliaMediumCondensed}) format('woff2');
          unicoderange: u+0000-00ff, u+0131, u+0152-0153, u+02bb-02bc, u+02c6, u+02da, u+02dc, u+2000-206f, u+2074, u+20ac, u+2122, u+2191, u+2193, u+2212, u+2215, u+feff;
        }
        @font-face {
            font-family: 'apercu-light';
            font-style: normal;
            font-weight: normal;
            src: url(${ApercuLight}) format('woff2');
            unicoderange: u+0000-00ff, u+0131, u+0152-0153, u+02bb-02bc, u+02c6, u+02da, u+02dc, u+2000-206f, u+2074, u+20ac, u+2122, u+2191, u+2193, u+2212, u+2215, u+feff;
        }
       `,
    },
  }
});

// Main title
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

// Title of section
oxalisTheme.typography.h2 = {
    padding: '50px',
    fontSize: '80px',
    fontFamily: 'Dahlia-Bold',
    textAlign: 'center',
    [oxalisTheme.breakpoints.down("lg")]: {
        fontSize: "60px",
        padding: '40px',
    },
    [oxalisTheme.breakpoints.down("md")]: {
        fontSize: "40px",
        padding: '30px',
    }
};

// Subtitle of a section
oxalisTheme.typography.h3 = {
    paddingTop: '25px',
    paddingBottom: '25px',
    fontSize: '40px',
    letterSpacing: '3px',
    fontFamily: 'Dahlia-medium',
    [oxalisTheme.breakpoints.down("lg")]: {
        fontSize: "30px",
        padding: '22px',
        letterSpacing: '0.2rem'
    },
    [oxalisTheme.breakpoints.down("md")]: {
        fontSize: "20px",
        padding: '20px',
        letterSpacing: '0.1rem'
    }
};

// Text normal
oxalisTheme.typography.body1 = {
    fontSize: '20px',
    fontFamily: 'apercu-light',
    lineSpacing: '2px',
    padding: '5px',
    lineHeight: '1.3',
    [oxalisTheme.breakpoints.down("lg")]: {
        fontSize: "17px",
        padding: '2px',
    },
    [oxalisTheme.breakpoints.down("md")]: {
        fontSize: "14px",
    }
};

// Text links of appbar
oxalisTheme.typography.body2 = {
    fontSize: '14px',
    textShadow: '0 0 1px white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
};




export default oxalisTheme;

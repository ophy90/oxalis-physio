import {styled } from "@mui/material";
import Typography from "@mui/material/Typography";


export const HeaderTitlePurple = styled(Typography)({
    color: '#914e72',
    padding: '50px',
    fontSize: '80px',
    fontFamily: 'dahlia-bold',
    textAlign: 'center',
    "@media (max-width: 800px)": {
        fontSize: '40px',
        padding: '30px'
    }
});

export const HeaderTitleWhite = styled(Typography)({
    color: '#ffffff',
    padding: '50px',
    fontSize: '80px',
    fontFamily: 'dahlia-bold',
    textAlign: 'center',
    "@media (max-width: 800px)": {
        fontSize: '40px',
        padding: '30px',
    }
});

export const HeaderTitlePurpleFirstLine = styled(Typography)({
    color: '#914e72',
    paddingTop: '50px',
    fontSize: '80px',
    fontFamily: 'dahlia-bold',
    textAlign: 'center',
    "@media (max-width: 800px)": {
        fontSize: '40px',
        paddingTop: '30px',
    }
});

export const HeaderTitlePurpleSecondLine = styled(Typography)({
    color: '#914e72',
    paddingBottom: '50px',
    fontSize: '80px',
    fontFamily: 'dahlia-bold',
    textAlign: 'center',
    "@media (max-width: 800px)": {
        fontSize: '40px',
        paddingBottom: '30px',
    }
});

export const SubtitlePurple = styled(Typography)({
    color: '#914e72',
    paddingTop: '25px',
    paddingBottom: '25px',
    fontSize: '35px',
    fontFamily: 'dahlia-bold',
    "@media (max-width: 800px)": {
        fontSize: '20px',
        padding: '20px',
    }
});

export const TextWhite = styled(Typography)({
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'apercu-light',
    "@media (max-width: 800px)": {
        fontSize: '14px',
    },
    padding: '5px'
});

export const TextPurple = styled(Typography)({
    color: '#914e72',
    fontSize: '20px',
    fontFamily: 'apercu-light',
    "@media (max-width: 800px)": {
        fontSize: '14px',
    },
    padding: '5px'
});

export const TextPurpleSmallerParagraphs = styled(Typography)({
    color: '#914e72',
    fontSize: '20px',
    fontFamily: 'apercu-light',
    "@media (max-width: 800px)": {
        fontSize: '14px',
    },
    padding: '5px'
});

export const PurpleLightBox = styled('div')({
    display: 'flex',
    padding: '75px',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4edf0',
    width: '100%',
    '@media (max-width: 800px)': {
        padding: '20px',
    },
});

export const PurpleDarkBox = styled('div')({
    display: 'flex',
    padding: '75px',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#bd94aa',
    width: '100%',
    '@media (max-width: 800px)': {
        padding: '20px',
    },
});

export const WhiteBox = styled('div')({
    display: 'flex',
    padding: '75px',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
    '@media (max-width: 800px)': {
        padding: '20px',
    },
});

export const PurpleDarkBoxCentered = styled('div')({
    backgroundColor: '#bd94aa',
    width: '100%',
    padding: '75px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 800px)': {
        padding: '20px',
    },
});

export const Blocks = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '65%',
    paddingBottom: '40px',
    '@media (max-width: 800px)': {
        paddingBottom: '20px',
        width: '80%',
        margin: 'none',
    },
});

export const FormatCopyRight = styled('div')({
    padding: '50px',
    color: 'white',
    '@media (max-width: 800px)': {
        padding: '30px',
    },
});

export const Sources = styled('div')({
    '& a': {
        color: '#914e72',
    },
    '& a:link': {
        color: '#914e72',
    },
    '& a:hover': {
        color: '#914e72',
    },
    '& a:visited': {
        color: '#914e72',
    },
});

const StylerFooterStyle = styled('div')({
    display: 'inline-flex',
    width: '800px',
    justifyContent: 'space-evenly',
    '@media (max-width: 800px)': {
        paddingBottom: '20px',
        width: '80%',
        margin: 'none',
    },
});

export const StylerFooter = ({ children, style }) => {
    return <StylerFooterStyle style={style}>{children}</StylerFooterStyle>;
};

import {styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StylerHeaderTitleWhiteHomePage = styled(Typography)({
    color:  'ffffff',
    padding: '25px',
    fontSize: '120px !important',
    fontFamily: 'dahlia-bold !important',
    textAlign: 'center',
    "@media (max-width: 800px)": {
        fontSize: '40px !important',
        padding: '60px',
    }
});

export const HeaderTitleWhiteHomePage = ({ children, style }) => {
    return <StylerHeaderTitleWhiteHomePage style={style}>{children}</StylerHeaderTitleWhiteHomePage>;
};

export const HeaderTitlePurple = styled(Typography)({
    color: '#914e72',
    padding: '50px',
    fontSize: '75px',
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
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    textAlign: 'center',
    "@media (max-width: 800px)": {
        fontSize: '40px',
        padding: '30px',
    }
});

export const QuotePurple = styled(Typography)({
    color: '#914e72',
    paddingBottom: '25px',
    fontSize: '20px',
    fontFamily: 'dahlia-bold',
    textAlign: 'center',
    fontWeight: 'bold',
    "@media (max-width: 800px)": {
        fontSize: '20px',
        paddingBottom: '20px'
    }
});

export const HeaderTitlePurpleFirstLine = styled(Typography)({
    color: '#914e72',
    paddingTop: '50px',
    fontSize: '75px',
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
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    textAlign: 'center',
    "@media (max-width: 800px)": {
        fontSize: '40px',
        paddingBottom: '30px',
    }
});


export const QuoteWhite = styled(Typography)({
    color: '#ffffff',
    fontSize: '40px',
    fontFamily: 'dahlia-bold',
    textAlign: 'center',
    "@media (max-width: 800px)": {
        fontSize: '20px',
    }
});

export const SubtitlePurple = styled(Typography)({
    color: '#914e72',
    padding: '25px',
    fontSize: '27px',
    fontFamily: 'dahlia-bold',
    "@media (max-width: 800px)": {
        fontSize: '20px',
        padding: '20px',
    }
});

export const SubtitleWhite = styled(Typography)({
    color: '#ffffff',
    padding: '25px',
    fontSize: '27px',
    fontFamily: 'dahlia-bold',
    "@media (max-width: 800px)": {
        fontSize: '20px',
        padding: '20px',
    }
});

export const TextWhite = styled(Typography)({
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'apercu-light',
    "@media (max-width: 800px)": {
        fontSize: '14px',
    }
});

export const TextPurple = styled(Typography)({
    color: '#914e72',
    fontSize: '16px',
    alignItems: 'center',
    fontFamily: 'apercu-light',
    "@media (max-width: 800px)": {
        fontSize: '14px',
    },
    padding: '5px'
});

export const TextPurpleSmallerParagraphs = styled(Typography)({
    color: '#914e72',
    fontSize: '16px',
    alignItems: 'center',
    textAlign: 'center',
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
    backgroundColor: '#ffffff',
    width: '100%',
    padding: '75px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    alignItems: 'center',
    width: '50%',
    paddingBottom: '40px',
    '@media (max-width: 800px)': {
        paddingBottom: '20px',
        width: '80%',
        margin: 'none',
    },
});

export const FormatCopyRight = styled('div')({
    padding: '50px',
    '@media (max-width: 800px)': {
        padding: '30px',
    },
});

export const TextNavbar = styled('div')({
    color: '#914e72',
    fontSize: '25px',
    fontFamily: 'dahlia-bold',
    textDecoration: 'underline',
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

export const ArrowLinkContactContainer = styled('div')({
    position: 'relative',
});

export const ArrowLinkContact = styled('div')({
    position: 'absolute',
});

export const ContactIcons = styled('div')({
    color: 'white',
});
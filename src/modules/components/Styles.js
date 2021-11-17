import {makeStyles, styled} from "@mui/styles";
import Typography from "@mui/material/Typography";
import * as url from "url";

export const HeaderTitleWhiteHomePage = styled(Typography)({
    color: '#ffffff',
    padding: '25px',
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
    "@media (max-width: 800px)": {
        fontSize: '50px',
        padding: '60px',
    }
});

export const HeaderTitlePurple = styled(Typography)({
    color: '#914e72',
    padding: '70px',
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
    "@media (max-width: 800px)": {
        fontSize: '30px',
        padding: '30px'
    }
});

export const QuotePurple = styled(Typography)({
    color: '#914e72',
    paddingBottom: '25px',
    fontSize: '20px',
    fontFamily: 'dahlia-bold',
    fontWeight: 'bold',
    "@media (max-width: 800px)": {
        fontSize: '20px',
        paddingBottom: '20px'
    }
});

export const HeaderTitlePurpleFirstLine = styled(Typography)({
    color: '#914e72',
    paddingTop: '70px',
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
    "@media (max-width: 800px)": {
        fontSize: '30px',
        paddingTop: '30px',
    }
});

export const HeaderTitlePurpleSecondLine = styled(Typography)({
    color: '#914e72',
    paddingBottom: '70px',
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
    "@media (max-width: 800px)": {
        fontSize: '30px',
        paddingBottom: '30px',
    }
});

export const HeaderTitleWhite = styled(Typography)({
    color: '#ffffff',
    padding: '25px',
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
    "@media (max-width: 800px)": {
        fontSize: '30px',
        padding: '30px',
    }
});

export const QuoteWhite = styled(Typography)({
    color: '#ffffff',
    fontSize: '40px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
    "@media (max-width: 800px)": {
        fontSize: '25px',
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
    fontFamily: 'apercu-light',
    "@media (max-width: 800px)": {
        fontSize: '14px',
    }
});


export const useStyles = makeStyles({
    purpleLightBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F4EDF0',
        width: '100%',
        "@media (max-width: 800px)": {
            padding: '20px',
        }
    },
    purpleDarkBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#BD94AA',
        width: '100%',
        "@media (max-width: 800px)": {
            padding: '20px',
        }
    },
    whiteBox: {
        backgroundColor: '#ffffff',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "@media (max-width: 800px)": {
            padding: '20px',
        }
    },
    purpleDarkBoxCentered: {
        backgroundColor: '#BD94AA',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "@media (max-width: 800px)": {
            padding: '20px',
        }
    },
    blocks: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        paddingBottom: '40px',
        "@media (max-width: 800px)": {
            paddingBottom: '20px',
            width: '80%',
            margin: 'none',
        }
    },
    formatCopyRight: {
        padding: '50px',
        "@media (max-width: 800px)": {
            padding: '30px',
        }
    },
    textNavbar: {
        color: '#914e72',
        fontSize: '25px',
        fontFamily: 'dahlia-bold',
        textDecoration: 'underline'
    }
});
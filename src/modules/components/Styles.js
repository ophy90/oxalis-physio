import {makeStyles, styled} from "@mui/styles";
import Typography from "@mui/material/Typography";

export const HeaderTitlePurple = styled(Typography)({
    color: '#914e72',
    padding: '70px',
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
    "@media (max-width: 800px)": {
        fontSize: '50px',
    }
});

export const HeaderTitlePurpleFirstLine = styled(Typography)({
    color: '#914e72',
    paddingTop: '70px',
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
    "@media (max-width: 800px)": {
        fontSize: '50px',
    }
});

export const HeaderTitlePurpleSecondLine = styled(Typography)({
    color: '#914e72',
    paddingBottom: '70px',
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
    "@media (max-width: 800px)": {
        fontSize: '50px',
    }
});

export const HeaderTitleWhite = styled(Typography)({
    color: '#ffffff',
    padding: '25px',
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
    "@media (max-width: 800px)": {
        fontSize: '50px',
    }
});

export const QuoteWhite = styled(Typography)({
    color: '#ffffff',
    fontSize: '40px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
});

export const SubtitlePurple = styled(Typography)({
    color: '#914e72',
    padding: '25px',
    fontSize: '27px',
    fontFamily: 'dahlia-bold',
});

export const SubtitleWhite = styled(Typography)({
    color: '#ffffff',
    padding: '25px',
    fontSize: '27px',
    fontFamily: 'dahlia-bold',
});

export const TextWhite = styled(Typography)({
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'apercu-light',
});

export const TextPurple = styled(Typography)({
    color: '#914e72',
    fontSize: '16px',
    fontFamily: 'apercu-light',
});


export const useStyles = makeStyles({
    purpleLightBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F4EDF0',
        width: '100%'
    },
    purpleDarkBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#BD94AA',
        width: '100%',
    },
    whiteBox: {
        backgroundColor: '#ffffff',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    purpleDarkBoxCentered: {
        backgroundColor: '#BD94AA',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    blocks: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        paddingBottom: '40px'
    },
    formatCopyRight: {
        padding: '50px',
    },
    textNavbar: {
        color: '#914e72',
        fontSize: '25px',
        fontFamily: 'dahlia-bold',
        textDecoration: 'underline'
    }
});
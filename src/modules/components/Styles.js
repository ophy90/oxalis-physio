import {makeStyles, styled} from "@mui/styles";
import Typography from "@mui/material/Typography";

export const HeaderTitlePurple = styled(Typography)({
    color: '#914e72',
    padding: '25px',
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
    alignText: 'center',
});

export const HeaderTitleWhite = styled(Typography)({
    color: '#ffffff',
    padding: '25px',
    fontSize: '50px',
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
    fontSize: '75px',
    fontFamily: 'dahlia-bold',
});

export const TextWhite = styled(Typography)({
    color: '#ffffff',
    padding: '25px',
    fontSize: '16px',
    fontFamily: 'apercu-light',
});

export const TextPurple = styled(Typography)({
    color: '#914e72',
    paddingBottom: '25px',
    fontSize: '16px',
    fontFamily: 'apercu-light',
});

export const useStyles = makeStyles({
    purpleBox: {
        backgroundColor: '#F4EDF0'
    },
});
import * as React from 'react';
import Container from '@mui/material/Container';
import {SubtitleWhite, TextWhite, useStyles} from "../components/Styles";

export default function AppFooter() {
    const classes = useStyles();
  return (
      <Container sx={{textAlign: 'center'}}  className={classes.purpleDarkBox} >
          <SubtitleWhite>
          Contact
          <br/>
          </SubtitleWhite>
          <TextWhite>
          Fabia Rüegg
          <br/>
          +41 78 207 70 85
          <br/>
          info@oxalis-respiration.ch
          <br/>
          © OXALIS 2021. TOUS DROITS RÉSERVÉS.
          </TextWhite>
      </Container>
  );
}

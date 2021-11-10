import * as React from 'react';
import {SubtitleWhite, TextWhite, useStyles} from "../components/Styles";

export default function AppFooter() {
    const classes = useStyles();

  return (
      <div className={classes.purpleDarkBoxCentered}>
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
      </div>
  );
}

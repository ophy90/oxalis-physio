import * as React from 'react';
import {HeaderTitleWhite, TextWhite, useStyles} from "../components/Styles";

export default function AppFooter() {
    const classes = useStyles();

  return (
      <div className={classes.purpleDarkBoxCentered} id={'contact'}>
          <HeaderTitleWhite>
          Contact
          </HeaderTitleWhite>
          <TextWhite>
          Fabia Rüegg
          </TextWhite>
          <TextWhite>
          +41 78 207 70 85
          </TextWhite>
          <TextWhite>
          info@oxalis-respiration.ch
          </TextWhite>
          <TextWhite className={classes.formatCopyRight}>
          © OXALIS 2021. TOUS DROITS RÉSERVÉS.
          </TextWhite>
      </div>
  );
}

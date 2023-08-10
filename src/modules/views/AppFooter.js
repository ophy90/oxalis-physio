import * as React from 'react';
import {HeaderTitleWhite, TextWhite, useStyles} from "../components/Styles";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function AppFooter() {
    const classes = useStyles();
    let year = new Date().getFullYear();

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
          <div>
              <a href="https://www.instagram.com/oxalis.respiration/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className={classes.contactIcons}/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100078833613396" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon className={classes.contactIcons}/>
              </a>
          </div>
          <TextWhite className={classes.formatCopyRight}>
          © OXALIS {year} TOUS DROITS RÉSERVÉS.
          </TextWhite>
      </div>
  );
}

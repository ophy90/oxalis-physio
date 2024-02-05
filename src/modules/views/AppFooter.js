import * as React from 'react';
import {HeaderTitleWhite, TextWhite, PurpleDarkBoxCentered, ContactIcons, FormatCopyRight} from "../components/Styles";


export default function AppFooter() {
    let year = new Date().getFullYear();

  return (
      <PurpleDarkBoxCentered id={'contact'}>
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
                  <ContactIcons/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100078833613396" target="_blank" rel="noopener noreferrer">
                  <ContactIcons/>
              </a>
          </div>
          <FormatCopyRight>
          © OXALIS {year} TOUS DROITS RÉSERVÉS.
          </FormatCopyRight>
      </PurpleDarkBoxCentered>
  );
}

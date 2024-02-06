import * as React from 'react';
import {HeaderTitleWhite, TextWhite, PurpleDarkBoxCentered, FormatCopyRight, StylerFooter} from "../components/Styles";


export default function AppFooter() {
    let year = new Date().getFullYear();

  return (
      <PurpleDarkBoxCentered id={'contact'}>
          <HeaderTitleWhite>
          contact
          </HeaderTitleWhite>
          <StylerFooter>
              <TextWhite>
                  Fabia Rüegg
                  <br/>
                  Physiotherapie à domicile
                  <br/>
                  Région de Fribourg
              </TextWhite>
              <TextWhite >
                  +41 78 207 70 85
                  <br/>
                  info@physio-oxalis.ch
                  <br/>
                  Lundi et mercredi
              </TextWhite>
          </StylerFooter>
          <FormatCopyRight>
          © OXALIS {year} TOUS DROITS RÉSERVÉS.
          </FormatCopyRight>
      </PurpleDarkBoxCentered>
  );
}

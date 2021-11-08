import * as React from 'react';
import Container from '@mui/material/Container';
import {HeaderTitlePurple, SubtitlePurple, TextPurple, useStyles} from "../components/Styles";

function InformationsPratiques() {
    const classes = useStyles();
  return (
      <Container sx={{textAlign: 'center'}} className={classes.whiteBox}>
          <HeaderTitlePurple>
              Informations Pratiques
          </HeaderTitlePurple>
          <TextPurple>
                Être habillé confortablement (training, habits souples par exemple), vous allez gar- der vos vêtements.
          </TextPurple>
          <SubtitlePurple>
          Tarifs et durée
          </SubtitlePurple>
          <TextPurple>
          Une séance coûte CHF 100.–
          Paiement en espèce uniquement (non remboursé par les caisses maladie).
          Durée approximative : 60 à 90 minutes (première séance), puis entre 45 et
          60 minutes pour les suivantes. A noter que le nombre de séance ne peut être défini en avance, la prise en charge est en fonction de chaque individu.
          </TextPurple>
          <SubtitlePurple>
          Horaires & lieu
          </SubtitlePurple>
          <TextPurple>
          Tous les mercredis après-midi, au cabinet ostéopathie XXXXXXX, Notre Dame de la route XX, Villars-sur-Glâne
          </TextPurple>
          <SubtitlePurple>
          Liens externes
          </SubtitlePurple>
          <TextPurple>
          Site de Benoît Tremblay : www.pneumacorps.com
          Site de Union PneumaCorps France : pneumacorps2021.wixsite.com/my-site-1
          </TextPurple>
          <SubtitlePurple>
          Informations Covid
          </SubtitlePurple>
          <TextPurple>
          Les mesures usuelles sont en vigueur.
          </TextPurple>
      </Container>
  );
}

export default InformationsPratiques;

import * as React from 'react';
import {
    HeaderTitlePurpleFirstLine,
    HeaderTitlePurpleSecondLine,
    SubtitlePurple,
    TextPurple,
    useStyles
} from "../components/Styles";

function InformationsPratiques() {
    const classes = useStyles();
  return (
      <div className={classes.whiteBox}>
              <div className={classes.blocks}>
                      <HeaderTitlePurpleFirstLine id={'informations'}>
                          Informations
                      </HeaderTitlePurpleFirstLine>
                  <HeaderTitlePurpleSecondLine>
                      Pratiques
                  </HeaderTitlePurpleSecondLine>
                      <TextPurple>
                              Être habillé confortablement (training, habits souples par exemple), vous allez gar- der vos vêtements.
                      </TextPurple>
              </div>
         <div className={classes.blocks}>
                 <SubtitlePurple>
                         Tarifs et durée
                 </SubtitlePurple>
                 <TextPurple>
                         Une séance coûte CHF 100.–
                         Paiement en espèce uniquement (non remboursé par les caisses maladie).
                         Durée approximative : 60 à 90 minutes (première séance), puis entre 45 et
                         60 minutes pour les suivantes. A noter que le nombre de séance ne peut être défini en avance, la prise en charge est en fonction de chaque individu.
                 </TextPurple>
         </div>
              <div className={classes.blocks}>
                      <SubtitlePurple>
                              Horaires & lieu
                      </SubtitlePurple>
                      <TextPurple>
                              Tous les mercredis après-midi, au cabinet ostéopathie XXXXXXX, Notre Dame de la route XX, Villars-sur-Glâne
                      </TextPurple>
              </div>
          <div className={classes.blocks}>
                  <SubtitlePurple>
                          Liens externes
                  </SubtitlePurple>
                  <TextPurple>
                          Site de Benoît Tremblay : www.pneumacorps.com
                          Site de Union PneumaCorps France : pneumacorps2021.wixsite.com/my-site-1
                  </TextPurple>
          </div>
          <div className={classes.blocks}>
                  <SubtitlePurple>
                          Informations Covid
                  </SubtitlePurple>
                  <TextPurple>
                          Les mesures usuelles sont en vigueur.
                  </TextPurple>
          </div>
      </div>
  );
}

export default InformationsPratiques;

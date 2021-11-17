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
                          Être habillé·e confortablement (training, habits souples par exemple), vous allez garder vos vêtements.
                      </TextPurple>
              </div>
         <div className={classes.blocks}>
                 <SubtitlePurple>
                         Tarifs et durée
                 </SubtitlePurple>
                 <TextPurple>
                     Une séance coûte 100.- .
                     <br/>
                     Payement en espèce uniquement (non remboursé par les caisses maladie).
                     <br/>
                     <br/>
                     Durée approximative de 60 à 90 minutes (première séance) puis entre 45 et 60 minutes pour les
                     séances suivantes. A noter que le nombre de séance ne peut être défini en avance, la prise en
                     charge est en fonction de chaque personne.
                 </TextPurple>
         </div>
              <div className={classes.blocks}>
                      <SubtitlePurple>
                              Horaires & lieu
                      </SubtitlePurple>
                      <TextPurple>
                          Lundi - vendredi
                          <br/>
                          Fribourg, Rue Pierre-Abey 33
                      </TextPurple>
              </div>
          <div className={classes.blocks}>
                  <SubtitlePurple>
                          Liens externes
                  </SubtitlePurple>
                  <TextPurple>
                      Site de Benoît Tremblay :
                      <br/>
                      <a href={'https://www.pneumacorps.com/'}>https://www.pneumacorps.com/</a>
                      <br/>
                      Site de Union PneumaCorps France :
                      <br/>
                      <a href={'https://pneumacorps2021.wixsite.com/my-site-1'}>https://pneumacorps2021.wixsite.com/my-site-1</a>
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

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
                      pratiques
                  </HeaderTitlePurpleSecondLine>
                      <TextPurple>
                          <b>Être habillé·e confortablement</b> (training, habits souples par exemple), vous allez
                          garder vos vêtements.
                      </TextPurple>
              </div>
         <div className={classes.blocks}>
                 <SubtitlePurple>
                         Tarifs et durée
                 </SubtitlePurple>
                 <TextPurple>
                     Une séance coûte CHF 100.-
                     <br/>
                     Payement en espèces uniquement (non remboursé par les caisses maladie).
                     <br/>
                     <br/>
                     Durée approximative de 60 à 90 minutes (première séance) puis entre 45 et 60 minutes pour les
                     séances suivantes. À noter que le nombre de séances ne peut être défini en avance, la prise en
                     charge est en fonction de chaque personne.
                 </TextPurple>
         </div>
              <div className={classes.blocks}>
                      <SubtitlePurple>
                              Horaires & lieu
                      </SubtitlePurple>
                      <TextPurple>
                          <b>Jeudi</b> et <b>vendredi</b>
                      </TextPurple>
                      <TextPurple>
                          La prise de RDV se fait par <b>téléphone</b> ou par <b>e-mail</b> uniquement.
                      </TextPurple>
                     <TextPurple>
                         Cabinet de santé <b>Sphère</b>, Boulevard de Pérolles 6, 1700 Fribourg
                      </TextPurple>
              </div>
          <div className={classes.blocks}>
                  <SubtitlePurple>
                          Liens externes et sources
                  </SubtitlePurple>
                  <TextPurple className={classes.sources}>
                      Site du cabinet de Santé Sphère: <span> </span>
                      <a href={'https://www.cabinet-sphere.ch/'} target={"_blank"}>www.cabinet-sphere.ch/</a>
                      <br/>
                      Site de Benoît Tremblay: <span> </span>
                      <a href={'https://www.pneumacorps.com/'} target={"_blank"}>www.pneumacorps.com/</a>
                      <br/>
                      Site de Union PneumaCorps France: <span> </span>
                      <a href={'https://pneumacorps2021.wixsite.com/my-site-1'} target={"_blank"}>
                          www.pneumacorps2021.wixsite.com/my-site-1</a>
                      <br/>
                      Site de l'inhalotherapie: <span> </span>
                      <a href={'https://www.inhalotherapie.com'} target={"_blank"}>www.inhalotherapie.com</a>
                  </TextPurple>
                  <SubtitlePurple>
                          Informations Covid
                  </SubtitlePurple>
                  <TextPurple>
                          Selon recommandations du Conseil Fédéral
                  </TextPurple>
          </div>
      </div>
  );
}

export default InformationsPratiques;

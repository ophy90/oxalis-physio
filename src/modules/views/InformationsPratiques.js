import * as React from 'react';
import {
    HeaderTitlePurpleFirstLine,
    HeaderTitlePurpleSecondLine,
    SubtitlePurple,
    TextPurple, TextPurpleSmallerParagraphs,
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
                      <TextPurpleSmallerParagraphs>
                          <b>Être habillé·e confortablement</b> (training, habits souples par exemple), vous allez
                          garder vos vêtements.
                      </TextPurpleSmallerParagraphs>
              </div>
         <div className={classes.blocks}>
                 <SubtitlePurple>
                         Tarifs et durée
                 </SubtitlePurple>
                 <TextPurple>
                     Une séance coûte CHF 100.-
                 </TextPurple>
                 <TextPurple>
                     Payement en espèces uniquement (non remboursé par les caisses maladie).
                 </TextPurple>
                <TextPurpleSmallerParagraphs>
                     <b>Durée approximative</b> de 60 à 90 minutes (première séance) puis entre
                     45 et 60 minutes pour les séances suivantes.
                 </TextPurpleSmallerParagraphs>
                <TextPurpleSmallerParagraphs>
                     À noter que le nombre de séances ne peut être défini en avance,
                     la prise en charge est en fonction de chaque personne.
                 </TextPurpleSmallerParagraphs>
         </div>
              <div className={classes.blocks}>
                      <SubtitlePurple>
                              Horaires & lieu
                      </SubtitlePurple>
                      <TextPurpleSmallerParagraphs>
                          <b>Jeudi</b> et <b>vendredi</b>
                      </TextPurpleSmallerParagraphs>
                      <TextPurpleSmallerParagraphs>
                          La prise de RDV se fait par <b>téléphone</b> ou par <b>e-mail</b> uniquement.
                      </TextPurpleSmallerParagraphs>
                     <TextPurpleSmallerParagraphs>
                         Cabinet de santé <b>Sphère</b>, Boulevard de Pérolles 6, 1700 Fribourg
                      </TextPurpleSmallerParagraphs>
              </div>
          <div className={classes.blocks}>
                  <SubtitlePurple>
                          Liens externes et sources
                  </SubtitlePurple>
                  <TextPurpleSmallerParagraphs className={classes.sources}>
                      Site du cabinet de Santé Sphère:
                      <br/>
                      <a href={'https://www.cabinet-sphere.ch/'} style={{color: '#BD94AA'}} target={"_blank"}>www.cabinet-sphere.ch</a>
                  </TextPurpleSmallerParagraphs>
                  <TextPurpleSmallerParagraphs>
                      Site de Benoît Tremblay:
                      <br/>
                      <a href={'https://www.pneumacorps.com/'} style={{color: '#BD94AA'}} target={"_blank"}>www.pneumacorps.com</a>
                  </TextPurpleSmallerParagraphs>
                  <TextPurpleSmallerParagraphs>
                      Site de Union PneumaCorps France:
                      <br/>
                      <a href={'https://pneumacorps2021.wixsite.com/my-site-1'} style={{color: '#BD94AA'}} target={"_blank"}>
                          www.pneumacorps2021.wixsite.com/my-site-1</a>
                  </TextPurpleSmallerParagraphs>
                  <TextPurpleSmallerParagraphs>
                      Site de l'inhalotherapie:
                      <br/>
                      <a href={'https://www.inhalotherapie.com'} style={{color: '#BD94AA'}} target={"_blank"}>www.inhalotherapie.com</a>
                  </TextPurpleSmallerParagraphs>
          </div>
              <div className={classes.blocks}>
                  <SubtitlePurple>
                          Informations Covid
                  </SubtitlePurple>
                  <TextPurpleSmallerParagraphs>
                          Selon recommandations du Conseil Fédéral
                  </TextPurpleSmallerParagraphs>
              </div>

      </div>
  );
}

export default InformationsPratiques;

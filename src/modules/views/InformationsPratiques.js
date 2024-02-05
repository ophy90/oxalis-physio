import * as React from 'react';
import {
    HeaderTitlePurpleFirstLine,
    HeaderTitlePurpleSecondLine,
    SubtitlePurple,
    TextPurple, TextPurpleSmallerParagraphs,
    useStyles
} from "../components/Styles";

function InformationsPratiques() {
    //const classes = useStyles();
  return (
      <div className={useStyles.whiteBox}>
              <div className={useStyles.blocks}>
                      <HeaderTitlePurpleFirstLine id={'informations'}>
                          Informations
                      </HeaderTitlePurpleFirstLine>
                  <HeaderTitlePurpleSecondLine>
                      pratiques
                  </HeaderTitlePurpleSecondLine>
                      <TextPurpleSmallerParagraphs>
                          Vous allez garder vos vêtements durant la séance.
                          Il est toutefois recommandé d’être <b>habillé·e confortablement </b>
                          (training ou habits souples par exemple).
                      </TextPurpleSmallerParagraphs>
              </div>
         <div className={useStyles.blocks}>
                 <SubtitlePurple>
                         Tarifs et durée
                 </SubtitlePurple>
                 <TextPurpleSmallerParagraphs>
                     Durée et coût : une séance dure entre 60 et 75 minutes, tarif fixe à 100.-
                 </TextPurpleSmallerParagraphs>
                 <TextPurple>
                     Payement en espèce à la fin de la séance
                 </TextPurple>
                 <TextPurpleSmallerParagraphs>
                     PneumaCorps n’est pas pris en charge par la LaMal ou par les assurances complémentaires.
                 </TextPurpleSmallerParagraphs>
             <TextPurpleSmallerParagraphs>
                     À noter que le nombre de séance ne peut être défini à l’avance. La fréquence et le nombre de
                     rendez-vous sont adaptés aux besoins du/de la client·e et seront discutés lors de la
                     première rencontre.
             </TextPurpleSmallerParagraphs>
         </div>
              <div className={useStyles.blocks}>
                      <SubtitlePurple>
                              Horaires & lieu
                      </SubtitlePurple>
                      <TextPurpleSmallerParagraphs>
                          <b>Mercredi </b> après-midi
                          <br/>
                          <b>Jeudi </b> après-midi
                          <br/>
                          <b>Vendredi </b> toute la journée
                      </TextPurpleSmallerParagraphs>
                      <TextPurpleSmallerParagraphs>
                          La prise de RDV se fait par <b>téléphone</b> ou par <b>e-mail</b>
                      </TextPurpleSmallerParagraphs>
                      <TextPurpleSmallerParagraphs>
                          <b>Lieu: </b> Cabinet <b>Racines & Coquelicots</b>, 3ème étage, Route de Villars 37,
                          1700 Fribourg (entrée côté route de Bertigny)
                      </TextPurpleSmallerParagraphs>
              </div>
          <div className={useStyles.blocks}>
                  <SubtitlePurple>
                          Liens externes
                  </SubtitlePurple>
                  <TextPurpleSmallerParagraphs>
                      Site de Benoît Tremblay:
                      <br/>
                      <a href={'https://www.pneumacorps.com/'} style={{color: '#BD94AA'}} target={"_blank"} rel="noreferrer">www.pneumacorps.com </a>
                  </TextPurpleSmallerParagraphs>
                  <TextPurpleSmallerParagraphs>
                      Site de Union PneumaCorps France:
                      <br/>
                      <a href={'https://pneumacorps2021.wixsite.com/my-site-1'} style={{color: '#BD94AA'}} target={"_blank"} rel="noreferrer">
                          www.pneumacorps2021.wixsite.com/my-site-1</a>
                  </TextPurpleSmallerParagraphs>
                  <TextPurpleSmallerParagraphs>
                      Cabinet Racines&Coquelicots:
                      <br/>
                      <a href={'https://www.racinesetcoquelicots.ch/'} style={{color: '#BD94AA'}} target={"_blank"} rel="noreferrer">www.racinesetcoquelicots.ch</a>
                  </TextPurpleSmallerParagraphs>
          </div>
              <div className={useStyles.blocks}>
                  <SubtitlePurple>
                          Informations Covid
                  </SubtitlePurple>
                  <TextPurpleSmallerParagraphs>
                      Selon les mesures en vigueur
                  </TextPurpleSmallerParagraphs>
              </div>

      </div>
  );
}

export default InformationsPratiques;

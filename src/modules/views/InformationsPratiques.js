import * as React from 'react';
import {
    HeaderTitlePurpleFirstLine,
    HeaderTitlePurpleSecondLine,
    SubtitlePurple,
    TextPurple, TextPurpleSmallerParagraphs, WhiteBox, Blocks
} from "../components/Styles";

function InformationsPratiques() {
  return (
      <WhiteBox>
              <Blocks>
                      <HeaderTitlePurpleFirstLine id={'informations'}>
                          informations
                      </HeaderTitlePurpleFirstLine>
                  <HeaderTitlePurpleSecondLine>
                      générales
                  </HeaderTitlePurpleSecondLine>
              </Blocks>
             <Blocks>
                     <SubtitlePurple>
                         Notre système de santé Suisse et son système tarifaire
                     </SubtitlePurple>
                     <TextPurpleSmallerParagraphs>
                         Conditions de prise en charge des frais de physiothérapie par les assurances.
                         <br/>
                         En savoir plus
                     </TextPurpleSmallerParagraphs>
             </Blocks>
              <Blocks>
                      <SubtitlePurple>
                          Tarifs et durée d’une séance
                      </SubtitlePurple>
                      <TextPurpleSmallerParagraphs>
                          Une séance de physiothérapie dure généralement 30 minutes.
                          <br/>
                          En savoir plus
                          <br/>
                      </TextPurpleSmallerParagraphs>
              </Blocks>
          <Blocks>
              <SubtitlePurple>
                  Horaire et région
              </SubtitlePurple>
              <TextPurpleSmallerParagraphs>
                  Je me déplace en ville de Fribourg et environs (Marly, Givisiez, Villars-sur-glâne).
                  <br/>
                  Jours de consultation : lundi et mercredi
                  <br/>
              </TextPurpleSmallerParagraphs>
          </Blocks>
      </WhiteBox>
  );
}

export default InformationsPratiques;

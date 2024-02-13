import * as React from 'react';
import {
    HeaderTitlePurpleFirstLine,
    HeaderTitlePurpleSecondLine,
    SubtitlePurple,
    TextPurpleSmallerParagraphs, WhiteBox, Blocks
} from "../components/Styles";
import MoreInfosOnSwissCareSystem from "../components/MoreInfosOnSwissCareSystem";
import MoreInfosOnPriceAndTime from "../components/MoreInfosOnPriceAndTime";


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
              <MoreInfosOnSwissCareSystem/>
          <MoreInfosOnPriceAndTime/>
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

import * as React from 'react';
import {
    HeaderTitlePurpleFirstLine,
    HeaderTitlePurpleSecondLine,
    SubtitlePurple,
    TextPurpleSmallerParagraphs, WhiteBox, Blocks
} from "../components/Styles";
import MoreInfosOnSwissCareSystem from "../components/MoreInfosOnSwissCareSystem";
import MoreInfosOnPriceAndTime from "../components/MoreInfosOnPriceAndTime";
import content from '../../content.json';
import MarkdownText from '../components/MarkDownText';


function InformationsGeneral() {
  return (
      <WhiteBox>
              <Blocks>
                      <HeaderTitlePurpleFirstLine id={'informations'}>
                          <MarkdownText>{content.generalInformations.firstBlock[0].text}</MarkdownText>
                      </HeaderTitlePurpleFirstLine>
                  <HeaderTitlePurpleSecondLine>
                      <MarkdownText>{content.generalInformations.firstBlock[1].text}</MarkdownText>
                  </HeaderTitlePurpleSecondLine>
              </Blocks>
              <MoreInfosOnSwissCareSystem/>
          <MoreInfosOnPriceAndTime/>
          <Blocks>
              <SubtitlePurple>
                  <MarkdownText>{content.generalInformations.thirdBlock[0].text}</MarkdownText>
              </SubtitlePurple>
              <TextPurpleSmallerParagraphs>
                  <MarkdownText>{content.generalInformations.thirdBlock[1].text}</MarkdownText>
                  <br/>
                  <MarkdownText>{content.generalInformations.thirdBlock[2].text}</MarkdownText>
                  <br/>
              </TextPurpleSmallerParagraphs>
          </Blocks>
      </WhiteBox>
  );
}

export default InformationsGeneral;

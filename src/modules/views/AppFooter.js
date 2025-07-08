import * as React from 'react';
import {HeaderTitleWhite, TextWhite, PurpleDarkBoxCentered, FormatCopyRight, StylerFooter} from "../components/Styles";
import content from '../../content.json';
import MarkdownText from '../components/MarkDownText';

export default function AppFooter() {
  return (
      <PurpleDarkBoxCentered id={'contact'}>
          <HeaderTitleWhite>
              <MarkdownText>{content.contact.block[0].text}</MarkdownText>
          </HeaderTitleWhite>
          <StylerFooter>
              <TextWhite>
                  <MarkdownText>{content.contact.block[1].text}</MarkdownText>
                  <br/>
                  <MarkdownText>{content.contact.block[2].text}</MarkdownText>
                  <br/>
                  <MarkdownText>{content.contact.block[3].text}</MarkdownText>
              </TextWhite>
              <TextWhite >
                  <MarkdownText>{content.contact.block[4].text}</MarkdownText>
                  <br/>
                  <MarkdownText>{content.contact.block[5].text}</MarkdownText>
                  <br/>
                  <MarkdownText>{content.contact.block[6].text}</MarkdownText>
              </TextWhite>
          </StylerFooter>
          <FormatCopyRight>
              <MarkdownText>{content.contact.block[7].text}</MarkdownText>
          </FormatCopyRight>
      </PurpleDarkBoxCentered>
  );
}

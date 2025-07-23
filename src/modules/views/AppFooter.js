import * as React from 'react';
import {PurpleDarkBoxCentered, FormatCopyRight, StylerFooter} from "../components/Styles";
import content from '../../content.json';
import StyledMarkdownText from '../components/StyledMarkdownText';
import {useTheme} from "@mui/material";

export default function AppFooter() {
    const theme = useTheme();
    const themeColor = theme.palette.text.primary.light;
    return (
      <PurpleDarkBoxCentered id={'contact'}>
          <StyledMarkdownText variant={'h2'} style={{color:themeColor}}>{content.contact.firstBlock[0].text}</StyledMarkdownText>
          <StylerFooter>
              <div>
                  <StyledMarkdownText variant={'body1'} style={{color:themeColor, padding: '0px'}}>{content.contact.firstBlock[1].text}</StyledMarkdownText>
                  <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.contact.firstBlock[2].text}</StyledMarkdownText>
                  <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.contact.firstBlock[3].text}</StyledMarkdownText>
            </div>
            <div>
                  <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.contact.firstBlock[4].text}</StyledMarkdownText>
                  <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.contact.firstBlock[5].text}</StyledMarkdownText>
                  <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.contact.firstBlock[6].text}</StyledMarkdownText>
              </div>
          </StylerFooter>
          <FormatCopyRight>
              <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.contact.firstBlock[7].text}</StyledMarkdownText>
          </FormatCopyRight>
      </PurpleDarkBoxCentered>
  );
}

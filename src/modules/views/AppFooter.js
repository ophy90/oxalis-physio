import * as React from 'react';
import {PurpleDarkBoxCentered, FormatCopyRight, StylerFooter} from "../components/Styles";
import content from '../../content.json';
import StyledMarkdownText from '../components/StyledMarkdownText';
import {useTheme} from "@mui/material";

export default function AppFooter() {
    const theme = useTheme();
    return (
      <PurpleDarkBoxCentered id={'contact'}>
          <StyledMarkdownText variant={'h2'} style={{color:theme.palette.text.primary.light}}>{content.contact.block[0].text}</StyledMarkdownText>
          <StylerFooter>
              <div>
                  <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.light, padding: '0px'}}>{content.contact.block[1].text}</StyledMarkdownText>
                  <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.light}}>{content.contact.block[2].text}</StyledMarkdownText>
                  <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.light}}>{content.contact.block[3].text}</StyledMarkdownText>
            </div>
            <div>
                  <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.light}}>{content.contact.block[4].text}</StyledMarkdownText>
                  <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.light}}>{content.contact.block[5].text}</StyledMarkdownText>
                  <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.light}}>{content.contact.block[6].text}</StyledMarkdownText>
              </div>
          </StylerFooter>
          <FormatCopyRight>
              <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.light}}>{content.contact.block[7].text}</StyledMarkdownText>
          </FormatCopyRight>
      </PurpleDarkBoxCentered>
  );
}

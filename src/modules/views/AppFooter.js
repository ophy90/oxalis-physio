import * as React from 'react';
import {TextWhite, PurpleDarkBoxCentered, FormatCopyRight, StylerFooter} from "../components/Styles";
import content from '../../content.json';
import MarkdownText from '../components/MarkDownText';
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material";

export default function AppFooter() {
    const theme = useTheme();
    return (
      <PurpleDarkBoxCentered id={'contact'}>
          <Typography variant={'h2'} style={{color:theme.palette.text.primary.light}}>
              <MarkdownText>{content.contact.block[0].text}</MarkdownText>
          </Typography>
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

import * as React from 'react';
import { WhiteBox, Blocks } from "../components/Styles";
import MoreInfosOnSwissCareSystem from "../components/MoreInfosOnSwissCareSystem";
import MoreInfosOnPriceAndTime from "../components/MoreInfosOnPriceAndTime";
import content from '../../content.json';
import MarkdownText from '../components/MarkDownText';
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material";


function InformationsGeneral() {
    const theme = useTheme();
  return (
      <WhiteBox>
              <Blocks>
                      <Typography variant={'h2'} id={'informations'} style={{paddingBottom: '0px', color:theme.palette.text.primary.dark}}>
                          <MarkdownText>{content.generalInformations.firstBlock[0].text}</MarkdownText>
                      </Typography>
                  <Typography variant={'h2'} style={{paddingTop: '0px', color:theme.palette.text.primary.dark}}>
                      <MarkdownText>{content.generalInformations.firstBlock[1].text}</MarkdownText>
                  </Typography>
              </Blocks>
              <MoreInfosOnSwissCareSystem/>
          <MoreInfosOnPriceAndTime/>
          <Blocks>
              <Typography variant={'h3'} id={'physiotherapy'} style={{color:theme.palette.text.primary.dark}}>
                  <MarkdownText>{content.generalInformations.thirdBlock[0].text}</MarkdownText>
              </Typography>
              <Typography variant={'body1'} style={{color:theme.palette.text.primary.dark, paddingBottom: '5px'}}>
                  <MarkdownText>{content.generalInformations.thirdBlock[1].text}</MarkdownText>
              </Typography>
              <Typography variant={'body1'} style={{color:theme.palette.text.primary.dark, paddingBottom: '5px'}}>
              <MarkdownText>{content.generalInformations.thirdBlock[2].text}</MarkdownText>
              </Typography>
          </Blocks>
      </WhiteBox>
  );
}

export default InformationsGeneral;

import * as React from 'react';
import { WhiteBox, Blocks } from "../components/Styles";
import MoreInfosOnSwissCareSystem from "../components/MoreInfosOnSwissCareSystem";
import MoreInfosOnPriceAndTime from "../components/MoreInfosOnPriceAndTime";
import content from '../../content.json';
import StyledMarkdownText from '../components/StyledMarkdownText';
import {useTheme} from "@mui/material";


function InformationsGeneral() {
    const theme = useTheme();
  return (
      <WhiteBox>
          <Blocks>
              <StyledMarkdownText variant={'h2'} id={'informations'} style={{paddingBottom: '0px', color:theme.palette.text.primary.dark}}>{content.generalInformations.firstBlock[0].text}</StyledMarkdownText>
              <StyledMarkdownText variant={'h2'} style={{paddingTop: '0px', color:theme.palette.text.primary.dark}}>{content.generalInformations.firstBlock[1].text}</StyledMarkdownText>
          </Blocks>
          <MoreInfosOnSwissCareSystem/>
          <MoreInfosOnPriceAndTime/>
          <Blocks>
              <StyledMarkdownText variant={'h3'} id={'physiotherapy'} style={{color:theme.palette.text.primary.dark}}>{content.generalInformations.thirdBlock[0].text}</StyledMarkdownText>
              <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.dark, paddingBottom: '5px'}}>{content.generalInformations.thirdBlock[1].text}</StyledMarkdownText>
              <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.dark, paddingBottom: '5px'}}>{content.generalInformations.thirdBlock[2].text}</StyledMarkdownText>
          </Blocks>
      </WhiteBox>
  );
}

export default InformationsGeneral;

import * as React from 'react';
import {PurpleDarkBox, Blocks} from "../components/Styles";
import OXALIS_photo_fabia from '../../assets/images/OXALIS_photo_fabia.jpg'
import MoreInfosOnTherapist from "../components/MoreInfosOnTherapist";
import StyledMarkdownText from "../components/StyledMarkdownText";
import content from '../../content.json';
import {useTheme} from "@mui/material";


export default function Therapist() {
    const theme = useTheme();
    const themeColor = theme.palette.text.primary.light;
  return (
    <PurpleDarkBox>
        <Blocks>
            <StyledMarkdownText variant={'h2'} id={'aPropos'} style={{color:themeColor}}>{content.therapist.firstBlock[0].text}</StyledMarkdownText>
            <img src={OXALIS_photo_fabia} alt={"portrait"}  width={'100%'}/>
        </Blocks>
      <Blocks>
          <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.therapist.firstBlock[1].text}</StyledMarkdownText>
      </Blocks>
        <Blocks>
            <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.therapist.firstBlock[2].text}</StyledMarkdownText>
        </Blocks>
        <Blocks>
            <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.therapist.firstBlock[3].text}</StyledMarkdownText>
        </Blocks>
        <MoreInfosOnTherapist/>
    </PurpleDarkBox>
  );
}
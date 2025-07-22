import * as React from 'react';
import {PurpleDarkBox, Blocks} from "../components/Styles";
import OXALIS_photo_fabia from '../../assets/images/OXALIS_photo_fabia.jpg'
import MoreInfosOnTherapist from "../components/MoreInfosOnTherapist";
import StyledMarkdownText from "../components/StyledMarkdownText";
import content from '../../content.json';
import {useTheme} from "@mui/material";


export default function Therapist() {
    const theme = useTheme();
  return (
    <PurpleDarkBox>
        <Blocks>
            <StyledMarkdownText variant={'h2'} id={'aPropos'} style={{color:theme.palette.text.primary.light}}>{content.therapist.firstBlock[0].text}</StyledMarkdownText>
            <img src={OXALIS_photo_fabia} alt={"portrait"}  width={'100%'}/>
        </Blocks>
      <Blocks>
          <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.light}}>{content.therapist.firstBlock[1].text}</StyledMarkdownText>
      </Blocks>
        <Blocks>
            <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.light}}>{content.therapist.firstBlock[2].text}</StyledMarkdownText>
        </Blocks>
        <Blocks>
            <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.light}}>{content.therapist.firstBlock[3].text}</StyledMarkdownText>
        </Blocks>
        <MoreInfosOnTherapist/>
    </PurpleDarkBox>
  );
}
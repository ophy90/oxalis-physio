import * as React from 'react';
import {TextWhite, PurpleDarkBox, Blocks} from "../components/Styles";
import OXALIS_photo_fabia from '../../assets/images/OXALIS_photo_fabia.jpg'
import MoreInfosOnTherapist from "../components/MoreInfosOnTherapist";
import MarkDownText from "../components/MarkDownText";
import content from '../../content.json';
import {useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Therapist() {
    const theme = useTheme();
  return (
    <PurpleDarkBox>
        <Blocks>
            <Typography variant={'h2'} id={'aPropos'} style={{color:theme.palette.text.primary.light}}>
                <MarkDownText>{content.therapist.firstBlock[0].text}</MarkDownText>
            </Typography>
            <img src={OXALIS_photo_fabia} alt={"portrait"}  width={'100%'}/>
        </Blocks>
      <Blocks>
          <TextWhite>
              <MarkDownText>{content.therapist.firstBlock[1].text}</MarkDownText>
          </TextWhite>
      </Blocks>
        <Blocks>
          <TextWhite>
              <MarkDownText>{content.therapist.firstBlock[2].text}</MarkDownText>
          </TextWhite>
        </Blocks>
        <Blocks>
          <TextWhite>
              <MarkDownText>{content.therapist.firstBlock[3].text}</MarkDownText>
          </TextWhite>
        </Blocks>
        <MoreInfosOnTherapist/>
    </PurpleDarkBox>
  );
}
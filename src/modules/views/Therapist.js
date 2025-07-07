import * as React from 'react';
import {HeaderTitleWhite, TextWhite, PurpleDarkBox, Blocks} from "../components/Styles";
import OXALIS_photo_fabia from '../../assets/images/OXALIS_photo_fabia.jpg'
import MoreInfosOnTherapist from "../components/MoreInfosOnTherapist";
import MarkDownText from "../components/MarkDownText";
import content from '../../content.json';


export default function Therapist() {

  return (
    <PurpleDarkBox>
        <Blocks>
            <HeaderTitleWhite id={'aPropos'}>
                <MarkDownText>{content.therapist.firstBlock[0].text}</MarkDownText>
            </HeaderTitleWhite>
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
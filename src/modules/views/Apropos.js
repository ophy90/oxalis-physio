import * as React from 'react';
import {HeaderTitleWhite, TextWhite, PurpleDarkBox, Blocks} from "../components/Styles";
import OXALIS_photo_fabia from '../../assets/images/OXALIS_photo_fabia.jpg'
import MoreInfosOnTherapist from "../components/MoreInfosOnTherapist";

export default function Therapeute() {

  return (
    <PurpleDarkBox>
        <Blocks>
            <HeaderTitleWhite id={'aPropos'}>
                la thérapeute
            </HeaderTitleWhite>
            <img src={OXALIS_photo_fabia} alt={"portrait"}  width={'100%'}/>
        </Blocks>
      <Blocks>
          <TextWhite>
              Diplômée depuis 2013 (HES-SO Loèche-les-Bains), je travaille actuellement en tant que physiothérapeute
              à domicile.
          </TextWhite>
      </Blocks>
        <Blocks>
          <TextWhite>
              Ma langue maternelle est le français.
          </TextWhite>
        </Blocks>
        <Blocks>
          <TextWhite>
              Je peux, au besoin, faire un suivi en allemand, italien et anglais.
          </TextWhite>
        </Blocks>
        <MoreInfosOnTherapist/>
    </PurpleDarkBox>
  );
}
import * as React from 'react';
import {HeaderTitleWhite, QuoteWhite, TextWhite, PurpleDarkBox, Blocks} from "../components/Styles";
import OXALIS_photo_fabia from '../../assets/images/OXALIS_photo_fabia.jpg'

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
              à domicile. A côté de cette activité, je suis également engagée à temps partiel à l’HFR Tafers
              dont le travail consiste en des traitements ambulatoires et hospitaliers.
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
        <Blocks>
          <TextWhite>
              En savoir plus
          </TextWhite>
        </Blocks>
        <Blocks>
            <TextWhite>
                J’ai travaillé deux ans à l’hôpital (Daler), cinq ans en cabinet (à Givisiez). Création d’Oxalis en 2022
                (séances PneumaCorps, travail avec le souffle et la posture) et Oxalis physiothérapie en 2024.
                Formations continues (viscéral, thérapie manuelle, k-taping) et certification PneumaCorps depuis
                2013. Expérience avec les personnes âgées, la réadaptation, traitement à domicile, patientèle en cabinet
                et suivis PneumaCorps.
            </TextWhite>
        </Blocks>
    </PurpleDarkBox>
  );
}
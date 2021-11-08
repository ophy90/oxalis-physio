import * as React from 'react';
import Container from '@mui/material/Container';
import {HeaderTitleWhite, QuoteWhite, SubtitleWhite, TextWhite, useStyles} from "../components/Styles";
import OXALIS_photo_fabia from '../../assets/images/OXALIS_photo_fabia.jpg'

export default function APropos() {
  const classes = useStyles();
  return (
    <Container sx={{textAlign: 'center'}} className={classes.purpleDarkBox}>
      <HeaderTitleWhite>
        A propos
      </HeaderTitleWhite>
        <img src={OXALIS_photo_fabia} alt={"portrait"} height={'300px'} width={'390px'}/>
      <TextWhite>
        Une quarantaine d’années par Benoît Tremblay, inhalothérapeute québécois. Elle intègre diverses techniques de relaxation, dont le but premier et fondamental est de diminuer les effets du stress chronique et d’éviter la limitation de la capacité respiratoire. Elle se définit comme de la relaxation et réorientation respiratoire intégrée (RRRI). La vision holistique de l’humain est au cœur de ce travail et tend vers un alignement corps-âme-esprit. Les outils utilisés sont régulièrement actuali- sés et modifiés par Benoît afin de correspondre au mieux aux besoins de chacun.
      </TextWhite>
        <QuoteWhite>
          « On est bien peu de chose,
        </QuoteWhite>
        <QuoteWhite>
            Et mon amie la rose
        </QuoteWhite>
        <QuoteWhite>
            Me l’a dit ce matin. »
        </QuoteWhite>
      <TextWhite>
      Commencer avec ce qui est là dans l’instant, l’évaluation se fait à la marche, en position assise et couchée. Ensuite, avec les éléments mis en lumière par l’obser- vation, commence le travail de rééquilibration, qui consiste en des mobilisations, des postures, des étirements doux. Et finalement, la personne aura un ou plusieurs exercices à refaire chez elle, pour ancrer le travail et s’autonomiser au quotidien.
      </TextWhite>
    </Container>
  );
}
import * as React from 'react';
import Container from '@mui/material/Container';
import {HeaderTitleWhite, QuoteWhite, SubtitleWhite, TextWhite, useStyles} from "../components/Styles";
import OXALIS_photo_fabia from '../../assets/images/OXALIS_photo_fabia.jpg'

export default function APropos() {
  const classes = useStyles();
  return (
    <div className={classes.purpleDarkBox}>
        <div className={classes.blocks}>
            <HeaderTitleWhite id={'aPropos'}>
                A propos
            </HeaderTitleWhite>
            <img src={OXALIS_photo_fabia} alt={"portrait"} height={'300px'} width={'390px'}/>
        </div>
        <div className={classes.blocks}>
            <QuoteWhite>
                « Je crois que c’est ce sentiment,
                un mélange de réconfort et de
                plénitude, qui me pousse à faire
                ce travail et me rappelle que la
                vie à quelque chose de magique. »
            </QuoteWhite>
        </div>
      <div className={classes.blocks}>
          <TextWhite className={classes.textAlignment}>
              En 2021 j’ai décidé de me réorienter et de passer de physiothérapeute diplômée, métier que j’ai exercé
              pendant sept ans, à praticienne PneumaCorps. Cela fait depuis 2014 que je suis formée à cette pratique et
              c’est maintenant que j‘ai envie de m’y consacrer entièrement. Nous n’avons pas d’autre choix que de vivre
              avec le corps que nous avons et comme nous avons toutes et tous des trains de vie soutenus, il est
              forcément mis intensément à contribution. Que nous ayons un métier physique, une charge mentale élevée ou
              des préoccupations de la vie quotidienne, le corps reflète à l’extérieur qui nous sommes à l’intérieur.
              Pour tout vous dire, je suis à chaque fois épatée par l’impact qu’ont les exercices sur mon propre
              bien-être psychique et physique. De constater que chaque jour, il est possible de s’offrir des instants
              de pause et de simplicité, me procure un immense plaisir. Ainsi les évènements du
              quotidien prennent une autre tournure lorsque je sens que je peux me ressourcer intérieurement.
          </TextWhite>
      </div>
    </div>
  );
}
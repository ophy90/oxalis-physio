import * as React from 'react';
import {HeaderTitleWhite, QuoteWhite, TextWhite, PurpleDarkBox, Blocks} from "../components/Styles";
import OXALIS_photo_fabia from '../../assets/images/OXALIS_photo_fabia.jpg'

export default function APropos() {
  return (
    <PurpleDarkBox>
        <Blocks>
            <HeaderTitleWhite id={'aPropos'}>
                À propos
            </HeaderTitleWhite>
            <img src={OXALIS_photo_fabia} alt={"portrait"} height={'300px'} width={'390px'}/>
        </Blocks>
        <Blocks>
            <QuoteWhite>
                « Je crois que c’est ce sentiment, un
                mélange de réconfort et de
                plénitude, qui me pousse à faire ce
                travail et me rappelle que la vie a
                quelque chose de magique. »
            </QuoteWhite>
        </Blocks>
      <Blocks>
          <TextWhite>
              En 2021 j’ai décidé de me réorienter et de passer de <b>physiothérapeute</b> diplômée,
              métier que j’ai exercé pendant sept ans, à <b>praticienne PneumaCorps</b>. Cela fait depuis
              2014 que je suis formée à cette pratique à laquelle je me consacre actuellement.
              Nous n’avons pas d’autre choix que de vivre avec le corps que nous avons et comme
              nous avons toutes et tous des trains de vie soutenus, il est forcément mis
              intensément à contribution. Que nous ayons un métier physique, une charge mentale
              élevée ou des préoccupations de la vie quotidienne, le corps est impacté, parfois de
              façon insoupçonnée. Cela m’apparaît comme une <b>évidence</b> que pour être en <b>bonne
              santé</b>, le soin du corps et donc de la respiration, sont une clé précieuse.
              Pour tout vous dire, concernant mon vécu avec PneumaCorps je suis à chaque fois
              épatée par l’impact des exercices. Au fil des années au contact de cette pratique j’en
              ai tiré si souvent un <b>bien-être psychique et physique</b> que c’est ce qui me motive à le
              faire bénéficier à autrui. Les mobilisations et exercices sont simples mais si utilisés et
              pratiqués de façon ciblée permettent un <b>résultat immédiat et puissant</b>.
              Je suis dans tous les cas enthousiaste à l’idée que ce travail puisse être partagé avec
              le plus grand nombre, en espérant qu’il soit aussi <b>ressourçant</b> que possible.
          </TextWhite>
      </Blocks>
    </PurpleDarkBox>
  );
}
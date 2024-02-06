import * as React from 'react';
import {HeaderTitlePurple, SubtitlePurple, TextPurple, PurpleLightBox, Blocks} from "../components/Styles";

function Physiotherapie() {
    return (
            <PurpleLightBox >
                <Blocks>
                    <HeaderTitlePurple id={'pneumacorps'}>
                        Physiothérapie
                    </HeaderTitlePurple>
                    <TextPurple>
                        Je m’appelle Fabia Rüegg, je suis physiothérapeute et me déplace à votre domicile dans la région de
                        Fribourg. Mes domaines de compétences :
                    </TextPurple>
                    <TextPurple>
                        <b>
                        Orthopédie – traumatologie – rhumatologie – gériatrie
                        </b>
                    </TextPurple>
                </Blocks>
                <Blocks >
                    <SubtitlePurple>
                        Vous êtes acteurs et actrices de votre santé
                    </SubtitlePurple>
                    <TextPurple>
                        <b>
                            Le·la physiothérapeute est un·e spécialiste du mouvement. Il·elle a les outils pour vous aider à
                            acquérir la meilleure capacité physique possible après un accident, une maladie, une limitation
                            ou une baisse d’état général.
                        </b>
                    </TextPurple>
                    <TextPurple>
                        Le suivi en physiothérapie a pour objectif de vous accompagner à retrouver de l’aisance avec votre
                        <b> corps</b> et dans vos <b>gestes</b>. Il permet également de faciliter les <b>activités</b> du quotidien. Parfois, le maintien
                        de l’état de santé physique tel qu’il est, constitue déjà un objectif.
                    </TextPurple>
                </Blocks>
                <Blocks>
                    <SubtitlePurple>
                        Pourquoi de la physiothérapie à domicile ?
                    </SubtitlePurple>
                    <TextPurple>
                        Cela peut arriver qu’à un moment donné de votre vie vous ne soyez pas en mesure de vous déplacer
                        jusqu’en cabinet de physiothérapie pour des séances régulières (problèmes liés à l’âge avancé, opération,
                        ressources insuffisantes).
                    </TextPurple>
                    <TextPurple>
                        Que cet empêchement soit sur une période limitée dans le temps (début de prise en charge à domicile
                        et suite dans un cabinet) ou sur le long terme, je me déplace jusqu’à votre lieu de vie.
                    </TextPurple>
                </Blocks>
            </PurpleLightBox>
    )
}

export default Physiotherapie;

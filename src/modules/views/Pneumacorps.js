import * as React from 'react';
import {HeaderTitlePurple, QuotePurple, SubtitlePurple, TextPurple, useStyles} from "../components/Styles";

function Pneumacorps() {
    const classes = useStyles();
    return (
            <div className={classes.purpleLightBox}>
                <div className={classes.blocks}>
                    <HeaderTitlePurple id={'pneumacorps'}>
                        PneumaCorps
                    </HeaderTitlePurple>
                    <QuotePurple>
                        « Un outil pour libérer la respiration et retrouver un équilibre moins forcé au quotidien »
                    </QuotePurple>
                    <TextPurple>
                        Avez-vous déjà eu ce sentiment que vous aviez besoin de prendre des grandes respirations de
                        temps en temps ? Des personnes vous ont-elles fait remarquer que vous respiriez de façon
                        superficielle ? Ou peut-être avez-vous simplement constaté que vous étiez raide dans le haut
                        du corps, les épaules, la nuque ?
                        <br/>
                        <br/>
                        Ces situations de la vie courante, à priori banales, mettent en avant que nous avons de nombreuses occasions
                        de nous crisper et qu’en regardant de plus près, force est de constater que
                        le corps, et spécifiquement la respiration, sont directement impactés. Chacun·e manifeste
                        les tensions différemment et y est sensible à sa façon. C’est souvent lorsque le trop-plein
                        déborde que nous sommes forcés de changer quelque chose et de ralentir.
                        <br/>
                        <br/>
                        En effectuant une séance PneumaCorps, c’est l’occasion de prévenir des conséquences liées au
                        stress chronique. Cela passe par la prise de conscience de certaines habitudes. La personne
                        peut retrouver un alignement entre le corps, le mental et la vie quotidienne à partir des
                        observations et exercices faits durant la séance.
                    </TextPurple>
                </div>
                <div className={classes.blocks}>
                    <SubtitlePurple>
                        Origine de la pratique
                    </SubtitlePurple>
                    <TextPurple>
                        Benoît Tremblay, qui est à l’origine de PneumaCorps, la définit comme de la « Relaxation et
                        Réorientation Respiratoire Intégrée » (RRRI). Cette pratique trouve ses prémices dans les
                        années huitante au Québec. Benoît Tremblay y pratique alors l’inhalothérapie, un métier de la
                        santé spécialisé en soins cardiorespiratoires et en assistance anesthésique (respiratory
                        therapist en anglais) . Il constatera rapidement que les techniques respiratoires et les
                        soins médicaux voient leur efficacité augmenter lorsque l’on tient compte en premier lieu
                        de l’état de tension propres à chaque personne. Progressivement, il développera
                        une façon d’optimiser les traitements usuels et de soulager rapidement les personnes atteintes
                        de maladies pulmonaires de par ses observations, sa sensibilité et ses recherches empiriques.
                        Sa façon de pratiquer, axée sur le besoin de l’individu, le poussera sans cesse et actuellement
                        encore, à faire évoluer cette approche.
                        <br/>
                        <br/>
                        Il en résulte à ce jour une approche adaptée aussi bien à des personnes atteintes de problèmes
                        respiratoires que sans troubles pulmonaires. L’objectif principal est que chacun·e retrouve et ait les outils pour retrouver une respiration libre de tension superflue. Elle n’est pas basée sur des techniques respiratoires à proprement parler mais intègre diverses techniques de relaxation ainsi que des mobilisations manuelles.

                    </TextPurple>
                </div>
                 <div className={classes.blocks}>
                     <SubtitlePurple>
                         Déroulé d’une séance
                     </SubtitlePurple>
                     <TextPurple>
                         Une séance comprend une évaluation de la posture et de la respiration debout, à la marche,
                         assis et couché. L’observation est basée sur des schémas précis de bandes anatomiques de
                         stress. Puis le travail se fait à partir de la zone du corps la plus tendue, alternant entre
                         la position couchée ainsi que la marche comme temps d’intégration. J’utilise principalement
                         des techniques de mobilisation, des postures, de l’auto-suggestion ou des étirements doux.
                         En fin de séance, un exercice à faire soi-même peut être suggéré pour ancrer le travail et
                         s’autonomiser au quotidien.
                     </TextPurple>
                 </div>
                <div className={classes.blocks}>
                    <SubtitlePurple>
                        À qui s’adresse cette pratique
                    </SubtitlePurple>
                    <TextPurple>
                        La respiration étant au cœur de la Vie, cette pratique s’adresse à « tout le monde ». Elle
                        prend tout son sens pour des personnes qui remarquent qu’elles forcent trop ou dépensent trop
                        d’énergie au quotidien et souhaitent adopter de nouvelles habitudes.
                        Elle peut avoir des bienfaits sur des troubles avérés (anxiété, troubles du sommeil, fatigue
                        chronique, nervosité, irritabilité, douleurs chroniques, problèmes de concentration, troubles
                        musculo-squelettiques) mais elle ne vise pas à les traiter spécifiquement. En revanche, les
                        séances PneumaCorps sont complémentaires aux autres techniques ou thérapies (telles que yoga,
                        ostéopathie, physiothérapie, chant, etc).
                    </TextPurple>
                </div>
            </div>
    )
}

export default Pneumacorps;

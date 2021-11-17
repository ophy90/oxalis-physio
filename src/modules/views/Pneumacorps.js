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
                        Ces situations, à priori banales, mettent en avant que nous avons de nombreuses occasions
                        de nous crisper au quotidien et qu’en regardant de plus près, force est de constater que
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
                        Benoît Tremblay, qui est à l’origine de Pneumacorps, la définit comme de la « Relaxation et
                        Réorientation Respiratoire Intégrée » (RRRI). Cette pratique trouve ses prémices dans les
                        années huitante au Québec. Benoît Tremblay y pratique alors l’inhalothérapie, un métier de la
                        santé spécialisé en soins cardiorespiratoires et en assistance anesthésique (respiratory
                        therapist en anglais) . Il constatera rapidement que les techniques respiratoires et les
                        soins médicaux voient leur efficacité augmenter lorsque l’on tient compte en premier lieu
                        de l’état de tension de base, propres à chaque personne. Progressivement, il développera
                        une façon d’optimiser les traitements usuels et soulager rapidement les personnes atteintes
                        de maladies pulmonaires au gré de ses observations, sa sensibilité et ses recherches empiriques.
                        Sa façon de pratiquer, axée sur le besoin de l’individu, le poussera sans cesse et actuellement
                        encore, à faire évoluer ses techniques.
                        <br/>
                        <br/>
                        Il en résulte à ce jour une approche adaptée aussi bien à des personnes atteintes de problèmes
                        respiratoires que sans trouble pulmonaire. L’objectif principal est que chacun·e retrouve et ait les outils pour retrouver une respiration libre de tension superflue. Elle n’est pas basée sur des techniques respiratoires à proprement parler mais intègre diverses techniques de relaxation ainsi que des mobilisations manuelles.

                    </TextPurple>
                </div>
                 <div className={classes.blocks}>
                     <SubtitlePurple>
                         Déroulé d’une séance
                     </SubtitlePurple>
                     <TextPurple>
                         Il s’agit d’un travail en profondeur sur des tensions chroniques pour libérer le souffle. La
                         pratique s’adresse à toute personne intéressée par ce propos. Au cours d’une séance, je propose dans
                         un premier temps de prendre conscience des tensions auxquelles nous sommes habitués et que nous
                         avons finalement « nor- malisées ». Commencer avec ce qui est là dans l’instant, l’évaluation se
                         fait à la marche, en position assise et couchée. Ensuite, avec les éléments mis en lumière par
                         l’observation, commence le travail de rééquilibration, qui consiste en des mobilisations, des
                         postures, des étirements doux. Et finalement, la personne aura un ou plusieurs exercices à refaire
                         chez elle, pour ancrer le travail et s’autonomiser au quotidien.
                     </TextPurple>
                 </div>
                <div className={classes.blocks}>
                    <SubtitlePurple>
                        A qui s’adresse cette pratique
                    </SubtitlePurple>
                    <TextPurple>
                        A toute personne désireuse de respirer plus librement. La respiration étant au cœur de la Vie, cela
                        concerne tout un chacun. Autant une personne qui se consi- dère en bonne que des personnes qui
                        souffres de troubles au quotidien liés au stress (anxiété, troubles du sommeil, fatigue chronique,
                        nervosité, irritabilité, dou- leurs chroniques, problèmes de concentration).
                    </TextPurple>
                </div>
            </div>
    )
}

export default Pneumacorps;

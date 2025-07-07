import * as React from 'react';
import {Blocks, SubtitlePurple, TextPurple, TextPurpleSmallerParagraphs} from "./Styles";
import MoreInfosPurpleIcons from "./MoreInfosPurpleIcons";
import {useState} from "react";

function MoreInfosOnPriceAndTime() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = (isOpenFromIcon) => {
        setIsOpen(isOpenFromIcon);
    };

    return (
        <>
            <Blocks>
                    <SubtitlePurple>
                        Tarifs et durée d’une séance
                    </SubtitlePurple>
                    <TextPurpleSmallerParagraphs>
                        Une séance de physiothérapie dure généralement 30 minutes.
                    </TextPurpleSmallerParagraphs>
                <div style={{display: "flex", flexDirection: "inline", justifyContent: "space-between"}}>
                    <button onClick={handleIsOpenChange} style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}>
                        {!isOpen &&
                        <TextPurple style={{textDecoration: "underline"}} >
                                    En savoir plus
                        </TextPurple>
                        }
                    </button>
                    <MoreInfosPurpleIcons onIsOpenChange={handleIsOpenChange} isOpen={isOpen}/>
                </div>
                <br/>
                <div>
                    {isOpen && <MoreInfosOnPriceAndTimeText/>}
                </div>
            </Blocks>
        </>
    );
}

function MoreInfosOnPriceAndTimeText() {
    return (
        <>
            <TextPurple>
                Les prestations de physiothérapie dans le domaine de la LaMal ont une structure tarifaire à la séance et non au temps.
            </TextPurple>
            <TextPurple>
                Séance de physiothérapie générale : 48 CHF
            </TextPurple>
            <TextPurple>
                Séance de physiothérapie complexe : 77 CHF
            </TextPurple>
            <TextPurple>
                Supplément premier traitement : 24 CHF (première séance uniquement)
            </TextPurple>
            <TextPurple>
                Supplément pour le déplacement : 34 CHF (par séance)
            </TextPurple>
            <TextPurple>
                A compter du 1er juillet, introduction du nouveau tarif concernant les prestations de la LAA, AI, AM (ne concerne pas la LaMal).
            </TextPurple>
        </>
    );
}

export default MoreInfosOnPriceAndTime;
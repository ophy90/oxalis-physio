import * as React from 'react';
import {Blocks, TextWhite} from "./Styles";
import MoreInfosWhiteIcons from "./MoreInfosWhiteIcons";
import {useState} from "react";

function MoreInfosOnTherapist() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = (isOpenFromIcon) => {
        setIsOpen(isOpenFromIcon);
    };

    return (
        <>
            <Blocks>
                <div style={{display: "flex", flexDirection: "inline", justifyContent: "space-between"}}>
                    <button onClick={handleIsOpenChange} style={{backgroundColor: "transparent", border: "none", cursor: "pointer", margin: "none"}}>
                        {!isOpen &&
                        <TextWhite style={{textDecoration: "underline"}} >
                            En savoir plus
                        </TextWhite>
                        }
                    </button>
                    <MoreInfosWhiteIcons onIsOpenChange={handleIsOpenChange} isOpen={isOpen}/>
                </div>
                <br/>
                <div>
                    {isOpen && <MoreInfosOnTherapistText/>}
                </div>
            </Blocks>
        </>
    );
}

function MoreInfosOnTherapistText() {
    return (
        <TextWhite>
            J’ai travaillé deux ans à l’hôpital (Daler), cinq ans en cabinet (à Givisiez). Création d’Oxalis en 2022
            (séances PneumaCorps, travail avec le souffle et la posture) et Oxalis physiothérapie en 2024.
            Formations continues (viscéral, thérapie manuelle, k-taping) et certification PneumaCorps depuis
            2013. Expérience avec les personnes âgées, la réadaptation, traitement à domicile, patientèle en cabinet
            et suivis PneumaCorps.
        </TextWhite>
    );
}

export default MoreInfosOnTherapist;
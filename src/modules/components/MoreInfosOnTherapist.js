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
        <>
            <TextWhite>
                J’ai travaillé deux ans à l’hôpital Daler, cinq ans en cabinet (à Givisiez) et j’ai effectué un
                remplacement à temps partiel au HFR Tavel en 2024.
            </TextWhite>
            <TextWhite>
                Création d’Oxalis physiothérapie en 2024.
            </TextWhite>
            <TextWhite>
                Formations continues : viscéral, thérapie manuelle, k-taping, prévention des chutes, certification PneumaCorps.
            </TextWhite>
            <TextWhite>
                Expérience avec les personnes âgées, traitement à domicile, patientèle en cabinet
            </TextWhite>
        </>
    );
}

export default MoreInfosOnTherapist;